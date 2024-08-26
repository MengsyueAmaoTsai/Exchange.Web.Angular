import { isPlatformBrowser } from "@angular/common";
import {
	Component,
	type OnDestroy,
	type OnInit,
	PLATFORM_ID,
	inject,
} from "@angular/core";

import {
	type ChartingLibraryWidgetOptions,
	type IChartingLibraryWidget,
	type LanguageCode,
	type ResolutionString,
	widget,
} from "../../assets/charting_library";

class TradingViewChartConstants {
	public static readonly LibraryPath = "/assets/charting_library/";
	public static readonly ChartStorageApiVersion = "1.1";
	public static readonly ChartStorageUrl = "https://saveload.tradingview.com";
	public static readonly DemoDataFeedUrl = "https://demo_feed.tradingview.com";
}

@Component({
	selector: "trading-view-chart",
	templateUrl: "./trading-view-chart.component.html",
	styleUrls: ["./trading-view-chart.component.scss"],
	standalone: true,
})
export class TradingViewChartComponent implements OnInit, OnDestroy {
	private readonly platformId = inject(PLATFORM_ID);

	private symbol: ChartingLibraryWidgetOptions["symbol"] = "AAPL";

	private interval: ChartingLibraryWidgetOptions["interval"] =
		"D" as ResolutionString;

	private clientId: ChartingLibraryWidgetOptions["client_id"] =
		"tradingview.com";

	private userId: ChartingLibraryWidgetOptions["user_id"] = "public_user_id";

	private elementId: ChartingLibraryWidgetOptions["container"] =
		"TradingViewChart";

	private chartInstance: IChartingLibraryWidget | null = null;

	public ngOnDestroy(): void {
		if (this.chartInstance !== null) {
			this.chartInstance.remove();
			this.chartInstance = null;
		}
	}

	public ngOnInit(): void {
		if (isPlatformBrowser(this.platformId)) {
			const chartOptions: ChartingLibraryWidgetOptions = {
				symbol: this.symbol,
				datafeed: new (window as any).Datafeeds.UDFCompatibleDatafeed(
					TradingViewChartConstants.DemoDataFeedUrl,
				),
				interval: this.interval,
				container: this.elementId,
				library_path: TradingViewChartConstants.LibraryPath,
				locale: this.getLanguageFromUrl(),
				disabled_features: ["use_localstorage_for_settings"],
				enabled_features: ["study_templates"],
				charts_storage_url: TradingViewChartConstants.ChartStorageUrl,
				charts_storage_api_version:
					TradingViewChartConstants.ChartStorageApiVersion,
				client_id: this.clientId,
				user_id: this.userId,
				fullscreen: false,
				autosize: true,
				theme: "dark",
				overrides: {
					"paneProperties.backgroundType": "solid",
					"paneProperties.background": "#242424",
					"paneProperties.vertGridProperties.color": "#242424",
					"paneProperties.horzGridProperties.color": "#242424",
				},
			};

			this.chartInstance = this.createTradingViewChart(chartOptions);
		}
	}

	private createTradingViewChart = (
		chartOptions: ChartingLibraryWidgetOptions,
	) => {
		const tvWidget = new widget(chartOptions);

		tvWidget.onChartReady(() => {
			tvWidget.headerReady().then(() => {
				const button = tvWidget.createButton();

				button.setAttribute("title", "Click to show a notification popup");
				button.classList.add("apply-common-tooltip");
				button.addEventListener("click", () =>
					tvWidget.showNoticeDialog({
						title: "Notification",
						body: "TradingView Charting Library API works correctly",
						callback: () => {
							console.log("Noticed!");
						},
					}),
				);
				button.innerHTML = "Check API";
			});
		});

		return tvWidget;
	};

	private getLanguageFromUrl(): LanguageCode {
		const regex = /[\?&]lang=([^&#]*)/;
		const results = regex.exec(location.search);

		return results === null
			? "en"
			: (decodeURIComponent(results[1].replace(/\+/g, " ")) as LanguageCode);
	}
}
