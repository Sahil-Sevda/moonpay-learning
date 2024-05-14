"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var oas_1 = __importDefault(require("oas"));
var core_1 = __importDefault(require("api/dist/core"));
var openapi_json_1 = __importDefault(require("./openapi.json"));
var SDK = /** @class */ (function () {
    function SDK() {
        this.spec = oas_1.default.init(openapi_json_1.default);
        this.core = new core_1.default(this.spec, 'moonpaydocs/1.0.0 (api/6.1.1)');
    }
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    SDK.prototype.config = function (config) {
        this.core.setConfig(config);
    };
    /**
     * If the API you're using requires authentication you can supply the required credentials
     * through this method and the library will magically determine how they should be used
     * within your API request.
     *
     * With the exception of OpenID and MutualTLS, it supports all forms of authentication
     * supported by the OpenAPI specification.
     *
     * @example <caption>HTTP Basic auth</caption>
     * sdk.auth('username', 'password');
     *
     * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
     * sdk.auth('myBearerToken');
     *
     * @example <caption>API Keys</caption>
     * sdk.auth('myApiKey');
     *
     * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
     * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
     * @param values Your auth credentials for the API; can specify up to two strings or numbers.
     */
    SDK.prototype.auth = function () {
        var _a;
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        (_a = this.core).setAuth.apply(_a, values);
        return this;
    };
    /**
     * If the API you're using offers alternate server URLs, and server variables, you can tell
     * the SDK which one to use with this method. To use it you can supply either one of the
     * server URLs that are contained within the OpenAPI definition (along with any server
     * variables), or you can pass it a fully qualified URL to use (that may or may not exist
     * within the OpenAPI definition).
     *
     * @example <caption>Server URL with server variables</caption>
     * sdk.server('https://{region}.api.example.com/{basePath}', {
     *   name: 'eu',
     *   basePath: 'v14',
     * });
     *
     * @example <caption>Fully qualified server URL</caption>
     * sdk.server('https://eu.api.example.com/v14');
     *
     * @param url Server URL
     * @param variables An object of variables to replace into the server URL.
     */
    SDK.prototype.server = function (url, variables) {
        if (variables === void 0) { variables = {}; }
        this.core.setServer(url, variables);
    };
    /**
     * Get your account details, including the verification status and the current fees.
     *
     * Returns the account associated with the provided `apiKey`.
     *
     *
     * @summary My Account Details
     * @throws FetchError<401, types.GetAccountResponse401> Unauthorized
     */
    SDK.prototype.getAccount = function () {
        return this.core.fetch('/v4/accounts/me', 'get');
    };
    /**
     * Returns the list of countries currently supported by MoonPay.
     *
     * @summary List supported countries
     * @throws FetchError<401, types.GetCountriesResponse401> Unauthorized
     */
    SDK.prototype.getCountries = function () {
        return this.core.fetch('/v3/countries', 'get');
    };
    /**
     * Returns the list of currencies supported by MoonPay.
     *
     * @summary List supported currencies
     * @throws FetchError<401, types.GetCurrenciesResponse401> Unauthorized
     */
    SDK.prototype.getCurrencies = function () {
        return this.core.fetch('/v3/currencies', 'get');
    };
    /**
     * Returns an object containing minimum and maximum buy amounts including or excluding fees
     * for base and quote currencies.
     *
     * It takes into account the payment method if it's provided, **otherwise it defaults to
     * the payment method with the lowest fees.**
     *
     *
     * @summary Get Crypto Currency limits
     * @throws FetchError<401, types.GetCurrencyLimitsResponse401> Unauthorized
     */
    SDK.prototype.getCurrencyLimits = function (metadata) {
        return this.core.fetch('/v3/currencies/{currencyCode}/limits', 'get', metadata);
    };
    /**
     * Returns a set of key-value pairs representing the current network fees of
     * cryptocurrencies against fiat currencies.
     *
     * Supply the codes of the crypto and fiat currencies you are interested in, and MoonPay
     * will return the relevant network fees.
     *
     *
     * @summary Get Crypto network fees
     * @throws FetchError<401, types.GetNetworkFeesResponse401> Unauthorized
     */
    SDK.prototype.getNetworkFees = function (metadata) {
        return this.core.fetch('/v3/currencies/network_fees', 'get', metadata);
    };
    /**
     * Get detailed real-time quote based on the provided currency code, base amount, your
     * extra fee percentage, payment method, and the inclusion of the fees.
     *
     *
     * @summary Get Real-time Buy quote
     * @throws FetchError<401, types.GetBuyQuoteResponse401> Unauthorized
     */
    SDK.prototype.getBuyQuote = function (metadata) {
        return this.core.fetch('/v3/currencies/{currencyCode}/buy_quote', 'get', metadata);
    };
    /**
     * Returns a set of key-value pairs representing a real-time sell quote for a currency.
     * Supply the currency code, the base amount, your extra fee percentage, the payment method
     * and whether the base amount is inclusive of fees, and MoonPay will return a detailed
     * sell quote.
     *
     * @summary Get Sell quote
     * @throws FetchError<401, types.GetSellQuoteResponse401> Unauthorized
     */
    SDK.prototype.getSellQuote = function (metadata) {
        return this.core.fetch('/v3/currencies/{currencyCode}/sell_quote', 'get', metadata);
    };
    /**
     * Returns information about an IP address. If the `isAllowed` flag is set to <span
     * class="value">false</span>, it means that MoonPay accepts citizens of this country but
     * not residents.
     *
     * @summary Check Customer's IP address
     * @throws FetchError<401, types.GetIpAddressResponse401> Unauthorized
     */
    SDK.prototype.getIpAddress = function (metadata) {
        return this.core.fetch('/v3/ip_address', 'get', metadata);
    };
    /**
     * Retrieve a transaction by id. This call will return an error if no transaction with the
     * supplied identifier exists.
     *
     * @summary Get Buy transaction
     * @throws FetchError<401, types.GetBuyTransactionResponse401> Unauthorized
     */
    SDK.prototype.getBuyTransaction = function (metadata) {
        return this.core.fetch('/v1/transactions/{transactionId}', 'get', metadata);
    };
    /**
     * Retrieve a transaction by its externalTransactionId. This is the identifier you assigned
     * the transaction when creating it. This endpoint returns an array of objects because we
     * cannot ensure the uniqueness of externalTransactionId.
     *
     * @summary Get Buy transaction by External identifier
     * @throws FetchError<401, types.GetBuyTransactionByExternalIdResponse401> Unauthorized
     */
    SDK.prototype.getBuyTransactionByExternalId = function (metadata) {
        return this.core.fetch('/v1/transactions/ext/{externalTransactionId}', 'get', metadata);
    };
    /**
     * Retrieve a sell transaction by id. This call will return an error if no sell transaction
     * with the supplied identifier exists.
     *
     * @summary Get Sell transaction
     * @throws FetchError<401, types.GetSellTransactionResponse401> Unauthorized
     */
    SDK.prototype.getSellTransaction = function (metadata) {
        return this.core.fetch('/v3/sell_transactions/{transactionId}', 'get', metadata);
    };
    /**
     * Retrieve a transaction by its externalTransactionId. This is the identifier you assigned
     * the transaction when creating it. This endpoint returns an array of objects because we
     * cannot ensure the uniqueness of externalTransactionId.
     *
     * @summary Get Sell transaction by External identifier
     * @throws FetchError<401, types.GetSellTransactionByExternalIdResponse401> Unauthorized
     */
    SDK.prototype.getSellTransactionByExternalId = function (metadata) {
        return this.core.fetch('/v3/sell_transactions/ext/{externalTransactionId}', 'get', metadata);
    };
    /**
     * Returns the list of swap pairs available to the account.
     *
     * @summary Get Swap pairs
     * @throws FetchError<401, types.GetSwapPairsResponse401> Unauthorized
     */
    SDK.prototype.getSwapPairs = function () {
        return this.core.fetch('/v4/swap/pairs', 'get');
    };
    /**
     * Returns the swap quote for a specific swap pair.
     *
     * @summary Get Swap quote
     * @throws FetchError<401, types.GetSwapQuoteResponse401> Unauthorized
     */
    SDK.prototype.getSwapQuote = function (metadata) {
        return this.core.fetch('/v4/swap/{PAIR}/quote', 'get', metadata);
    };
    /**
     * Executes a given swap quote. Refer to our Recipes section for more detailed examples.
     *
     * @summary Execute Swap quote
     * @throws FetchError<401, types.ExecuteSwapQuoteResponse401> Unauthorized
     */
    SDK.prototype.executeSwapQuote = function (body, metadata) {
        return this.core.fetch('/v4/swap/execute_quote', 'post', body, metadata);
    };
    /**
     * Returns a swap transaction by id. Refer to our <a href="/recipes">Recipes section</a>
     * for more detailed examples.
     *
     * @summary Get Swap transaction
     * @throws FetchError<401, types.GetSwapTransactionResponse401> Unauthorized
     */
    SDK.prototype.getSwapTransaction = function (metadata) {
        return this.core.fetch('/v4/swap/transaction/{transactionId}', 'get', metadata);
    };
    /**
     * Returns a swap transaction re quote by id. Refer to our <a href="/recipes">Recipes
     * section</a> for more detailed examples.
     *
     * @summary Get Swap requote
     * @throws FetchError<401, types.GetSwapRequoteResponse401> Unauthorized
     */
    SDK.prototype.getSwapRequote = function (metadata) {
        return this.core.fetch('/v4/swap/transaction/{transactionId}/requote', 'get', metadata);
    };
    /**
     * Rejects a given swap requote. Refer to our <a href="/recipes">Recipes section</a> for
     * more detailed examples.
     *
     * @summary Reject Swap requote
     * @throws FetchError<401, types.RejectSwapRequoteResponse401> Unauthorized
     */
    SDK.prototype.rejectSwapRequote = function (body, metadata) {
        return this.core.fetch('/v4/swap/reject_requote', 'post', body, metadata);
    };
    return SDK;
}());
var createSDK = (function () { return new SDK(); })();
module.exports = createSDK;
