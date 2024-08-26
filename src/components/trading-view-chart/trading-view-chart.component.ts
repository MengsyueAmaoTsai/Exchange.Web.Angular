import { isPlatformBrowser } from "@angular/common";
import {
	Component,
	Input,
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

@Component({
	selector: "trading-view-chart",
	templateUrl: "./trading-view-chart.component.html",
	styleUrls: ["./trading-view-chart.component.scss"],
	standalone: true,
})
export class TradingViewChartComponent implements OnInit, OnDestroy {
	private readonly platformId = inject(PLATFORM_ID);
	private _symbol: ChartingLibraryWidgetOptions["symbol"] = "AAPL";
	private _interval: ChartingLibraryWidgetOptions["interval"] =
		"D" as ResolutionString;
	// BEWARE: no trailing slash is expected in feed URL
	private _datafeedUrl = "https://demo_feed.tradingview.com";
	private _libraryPath: ChartingLibraryWidgetOptions["library_path"] =
		"/assets/charting_library/";
	private _chartsStorageUrl: ChartingLibraryWidgetOptions["charts_storage_url"] =
		"https://saveload.tradingview.com";
	private _chartsStorageApiVersion: ChartingLibraryWidgetOptions["charts_storage_api_version"] =
		"1.1";
	private _clientId: ChartingLibraryWidgetOptions["client_id"] =
		"tradingview.com";
	private _userId: ChartingLibraryWidgetOptions["user_id"] = "public_user_id";
	private _fullscreen: ChartingLibraryWidgetOptions["fullscreen"] = false;
	private _autosize: ChartingLibraryWidgetOptions["autosize"] = true;
	private _containerId: ChartingLibraryWidgetOptions["container"] =
		"TradingViewChart";
	private _tvWidget: IChartingLibraryWidget | null = null;

	@Input()
	set symbol(symbol: ChartingLibraryWidgetOptions["symbol"]) {
		this._symbol = symbol || this._symbol;
	}

	@Input()
	set interval(interval: ChartingLibraryWidgetOptions["interval"]) {
		this._interval = interval || this._interval;
	}

	@Input()
	set datafeedUrl(datafeedUrl: string) {
		this._datafeedUrl = datafeedUrl || this._datafeedUrl;
	}

	@Input()
	set libraryPath(libraryPath: ChartingLibraryWidgetOptions["library_path"]) {
		this._libraryPath = libraryPath || this._libraryPath;
	}

	@Input()
	set chartsStorageUrl(chartsStorageUrl: ChartingLibraryWidgetOptions["charts_storage_url"]) {
		this._chartsStorageUrl = chartsStorageUrl || this._chartsStorageUrl;
	}

	@Input()
	set chartsStorageApiVersion(chartsStorageApiVersion: ChartingLibraryWidgetOptions["charts_storage_api_version"]) {
		this._chartsStorageApiVersion =
			chartsStorageApiVersion || this._chartsStorageApiVersion;
	}

	@Input()
	set clientId(clientId: ChartingLibraryWidgetOptions["client_id"]) {
		this._clientId = clientId || this._clientId;
	}

	@Input()
	set userId(userId: ChartingLibraryWidgetOptions["user_id"]) {
		this._userId = userId || this._userId;
	}

	@Input()
	set fullscreen(fullscreen: ChartingLibraryWidgetOptions["fullscreen"]) {
		this._fullscreen = fullscreen || this._fullscreen;
	}

	@Input()
	set autosize(autosize: ChartingLibraryWidgetOptions["autosize"]) {
		this._autosize = autosize || this._autosize;
	}

	public ngOnDestroy(): void {
		if (this._tvWidget !== null) {
			this._tvWidget.remove();
			this._tvWidget = null;
		}
	}

	public ngOnInit(): void {
		if (isPlatformBrowser(this.platformId)) {
			this.createTradingViewChart();
		}
	}

	private createTradingViewChart = () => {
		function getLanguageFromURL(): LanguageCode | null {
			const regex = /[\?&]lang=([^&#]*)/;
			const results = regex.exec(location.search);

			return results === null
				? null
				: (decodeURIComponent(results[1].replace(/\+/g, " ")) as LanguageCode);
		}

		const widgetOptions: ChartingLibraryWidgetOptions = {
			symbol: this._symbol,
			datafeed: new (window as any).Datafeeds.UDFCompatibleDatafeed(
				this._datafeedUrl,
			),
			interval: this._interval,
			container: this._containerId,
			library_path: this._libraryPath,
			locale: getLanguageFromURL() || "en",
			disabled_features: ["use_localstorage_for_settings"],
			enabled_features: ["study_templates"],
			charts_storage_url: this._chartsStorageUrl,
			charts_storage_api_version: this._chartsStorageApiVersion,
			client_id: this._clientId,
			user_id: this._userId,
			fullscreen: this._fullscreen,
			autosize: this._autosize,
		};

		const tvWidget = new widget(widgetOptions);
		this._tvWidget = tvWidget;

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
	};
}
