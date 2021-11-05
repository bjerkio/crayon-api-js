[@bjerkio/crayon-api - v0.0.0](../README.md) › [ResellerSalesPricesApi](resellersalespricesapi.md)

# Class: ResellerSalesPricesApi

ResellerSalesPricesApi - object-oriented interface

**`export`** 

**`class`** ResellerSalesPricesApi

**`extends`** {BaseAPI}

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **ResellerSalesPricesApi**

## Index

### Constructors

* [constructor](resellersalespricesapi.md#constructor)

### Properties

* [basePath](resellersalespricesapi.md#protected-basepath)
* [configuration](resellersalespricesapi.md#protected-configuration)
* [fetch](resellersalespricesapi.md#protected-fetch)

### Methods

* [deleteByFilterAsync](resellersalespricesapi.md#deletebyfilterasync)
* [getAsync](resellersalespricesapi.md#getasync)
* [getCurrentAsync](resellersalespricesapi.md#getcurrentasync)
* [postAsync](resellersalespricesapi.md#postasync)
* [putAsync](resellersalespricesapi.md#putasync)
* [toggleAsync](resellersalespricesapi.md#toggleasync)

## Constructors

###  constructor

\+ **new ResellerSalesPricesApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `fetch`: [FetchAPI](../interfaces/fetchapi.md)): *[ResellerSalesPricesApi](resellersalespricesapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string |  BASE_PATH |
`fetch` | [FetchAPI](../interfaces/fetchapi.md) |  portableFetch |

**Returns:** *[ResellerSalesPricesApi](resellersalespricesapi.md)*

## Properties

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md)*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

___

### `Protected` fetch

• **fetch**: *[FetchAPI](../interfaces/fetchapi.md)*

*Inherited from [BaseAPI](baseapi.md).[fetch](baseapi.md#protected-fetch)*

## Methods

###  deleteByFilterAsync

▸ **deleteByFilterAsync**(`type?`: "License" | "Usage" | "OneTime", `objectId?`: number, `objectType?`: "Organization" | "CustomerTenant" | "Subscription" | "SubscriptionAddon", `fromDate?`: Date, `options?`: any): *Promise‹Response›*

**`throws`** {RequiredError}

**`memberof`** ResellerSalesPricesApi

**Parameters:**

Name | Type |
------ | ------ |
`type?` | "License" &#124; "Usage" &#124; "OneTime" |
`objectId?` | number |
`objectType?` | "Organization" &#124; "CustomerTenant" &#124; "Subscription" &#124; "SubscriptionAddon" |
`fromDate?` | Date |
`options?` | any |

**Returns:** *Promise‹Response›*

___

###  getAsync

▸ **getAsync**(`type?`: "License" | "Usage" | "OneTime", `objectId?`: number, `objectType?`: "Organization" | "CustomerTenant" | "Subscription" | "SubscriptionAddon", `fromDate?`: Date, `options?`: any): *Promise‹[ResellerSalesPrice](../modules/resellersalesprice.md)[]›*

**`throws`** {RequiredError}

**`memberof`** ResellerSalesPricesApi

**Parameters:**

Name | Type |
------ | ------ |
`type?` | "License" &#124; "Usage" &#124; "OneTime" |
`objectId?` | number |
`objectType?` | "Organization" &#124; "CustomerTenant" &#124; "Subscription" &#124; "SubscriptionAddon" |
`fromDate?` | Date |
`options?` | any |

**Returns:** *Promise‹[ResellerSalesPrice](../modules/resellersalesprice.md)[]›*

___

###  getCurrentAsync

▸ **getCurrentAsync**(`type?`: "License" | "Usage" | "OneTime", `objectId?`: number, `objectType?`: "Organization" | "CustomerTenant" | "Subscription" | "SubscriptionAddon", `fromDate?`: Date, `options?`: any): *Promise‹[ResellerSalesPrice](../modules/resellersalesprice.md)›*

**`throws`** {RequiredError}

**`memberof`** ResellerSalesPricesApi

**Parameters:**

Name | Type |
------ | ------ |
`type?` | "License" &#124; "Usage" &#124; "OneTime" |
`objectId?` | number |
`objectType?` | "Organization" &#124; "CustomerTenant" &#124; "Subscription" &#124; "SubscriptionAddon" |
`fromDate?` | Date |
`options?` | any |

**Returns:** *Promise‹[ResellerSalesPrice](../modules/resellersalesprice.md)›*

___

###  postAsync

▸ **postAsync**(`resellerSalesPrice?`: [ResellerSalesPrice](../modules/resellersalesprice.md), `options?`: any): *Promise‹[ResellerSalesPrice](../modules/resellersalesprice.md)›*

**`throws`** {RequiredError}

**`memberof`** ResellerSalesPricesApi

**Parameters:**

Name | Type |
------ | ------ |
`resellerSalesPrice?` | [ResellerSalesPrice](../modules/resellersalesprice.md) |
`options?` | any |

**Returns:** *Promise‹[ResellerSalesPrice](../modules/resellersalesprice.md)›*

___

###  putAsync

▸ **putAsync**(`oldFromDate`: Date, `resellerSalesPrice?`: [ResellerSalesPrice](../modules/resellersalesprice.md), `options?`: any): *Promise‹[ResellerSalesPrice](../modules/resellersalesprice.md)›*

**`throws`** {RequiredError}

**`memberof`** ResellerSalesPricesApi

**Parameters:**

Name | Type |
------ | ------ |
`oldFromDate` | Date |
`resellerSalesPrice?` | [ResellerSalesPrice](../modules/resellersalesprice.md) |
`options?` | any |

**Returns:** *Promise‹[ResellerSalesPrice](../modules/resellersalesprice.md)›*

___

###  toggleAsync

▸ **toggleAsync**(`resellerSalesPriceToggle?`: [ResellerSalesPriceToggle](../modules/resellersalespricetoggle.md), `options?`: any): *Promise‹Response›*

**`throws`** {RequiredError}

**`memberof`** ResellerSalesPricesApi

**Parameters:**

Name | Type |
------ | ------ |
`resellerSalesPriceToggle?` | [ResellerSalesPriceToggle](../modules/resellersalespricetoggle.md) |
`options?` | any |

**Returns:** *Promise‹Response›*
