[@bjerkio/crayon-api - v0.0.0](../README.md) › [AgreementProductsApi](agreementproductsapi.md)

# Class: AgreementProductsApi

AgreementProductsApi - object-oriented interface

**`export`** 

**`class`** AgreementProductsApi

**`extends`** {BaseAPI}

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **AgreementProductsApi**

## Index

### Constructors

* [constructor](agreementproductsapi.md#constructor)

### Properties

* [basePath](agreementproductsapi.md#protected-basepath)
* [configuration](agreementproductsapi.md#protected-configuration)
* [fetch](agreementproductsapi.md#protected-fetch)

### Methods

* [get](agreementproductsapi.md#get)
* [getAsExcelFile](agreementproductsapi.md#getasexcelfile)
* [getOperationSdk133](agreementproductsapi.md#getoperationsdk133)
* [getSupportedBillingCycles](agreementproductsapi.md#getsupportedbillingcycles)

## Constructors

###  constructor

\+ **new AgreementProductsApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `fetch`: [FetchAPI](../interfaces/fetchapi.md)): *[AgreementProductsApi](agreementproductsapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string |  BASE_PATH |
`fetch` | [FetchAPI](../interfaces/fetchapi.md) |  portableFetch |

**Returns:** *[AgreementProductsApi](agreementproductsapi.md)*

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

###  get

▸ **get**(`agreementTypeIds?`: Array‹string›, `page?`: number, `pageSize?`: number, `search?`: string, `priceListId?`: number, `organizationId?`: number, `customerTenantId?`: number, `agreementId?`: number, `isTrial?`: boolean, `agreementIds?`: Array‹number›, `searchDate?`: Date, `includePartNumbers?`: Array‹string›, `includePublisherIds?`: Array‹number›, `includePublisherNames?`: Array‹string›, `includePoolNames?`: Array‹string›, `includeOperatingSystemNames?`: Array‹string›, `includeLevelNames?`: Array‹string›, `includeLanguageNames?`: Array‹string›, `includeLicenseAgreementTypeNames?`: Array‹string›, `includeLicenseTypeNames?`: Array‹string›, `includeProductFamilyNames?`: Array‹string›, `includeProductTypeNames?`: Array‹string›, `includeProgramNames?`: Array‹string›, `includeOfferingNames?`: Array‹string›, `includePurchasePeriodNames?`: Array‹string›, `includePurchaseUnitNames?`: Array‹string›, `includeVersionNames?`: Array‹string›, `includeRegionNames?`: Array‹string›, `includeProductCategoryNames?`: Array‹string›, `excludePartNumbers?`: Array‹string›, `excludePublisherIds?`: Array‹number›, `excludePublisherNames?`: Array‹string›, `excludePoolNames?`: Array‹string›, `excludeOperatingSystemNames?`: Array‹string›, `excludeLevelNames?`: Array‹string›, `excludeLanguageNames?`: Array‹string›, `excludeLicenseAgreementTypeNames?`: Array‹string›, `excludeLicenseTypeNames?`: Array‹string›, `excludeProductFamilyNames?`: Array‹string›, `excludeProductTypeNames?`: Array‹string›, `excludeProgramNames?`: Array‹string›, `excludeOfferingNames?`: Array‹string›, `excludePurchasePeriodNames?`: Array‹string›, `excludePurchaseUnitNames?`: Array‹string›, `excludeVersionNames?`: Array‹string›, `excludeRegionNames?`: Array‹string›, `excludeProductCategoryNames?`: Array‹string›, `sortKey?`: string, `includeProductInformation?`: boolean, `sortOrder?`: string, `options?`: any): *Promise‹[AgreementProductCollection](../interfaces/agreementproductcollection.md)›*

**`throws`** {RequiredError}

**`memberof`** AgreementProductsApi

**Parameters:**

Name | Type |
------ | ------ |
`agreementTypeIds?` | Array‹string› |
`page?` | number |
`pageSize?` | number |
`search?` | string |
`priceListId?` | number |
`organizationId?` | number |
`customerTenantId?` | number |
`agreementId?` | number |
`isTrial?` | boolean |
`agreementIds?` | Array‹number› |
`searchDate?` | Date |
`includePartNumbers?` | Array‹string› |
`includePublisherIds?` | Array‹number› |
`includePublisherNames?` | Array‹string› |
`includePoolNames?` | Array‹string› |
`includeOperatingSystemNames?` | Array‹string› |
`includeLevelNames?` | Array‹string› |
`includeLanguageNames?` | Array‹string› |
`includeLicenseAgreementTypeNames?` | Array‹string› |
`includeLicenseTypeNames?` | Array‹string› |
`includeProductFamilyNames?` | Array‹string› |
`includeProductTypeNames?` | Array‹string› |
`includeProgramNames?` | Array‹string› |
`includeOfferingNames?` | Array‹string› |
`includePurchasePeriodNames?` | Array‹string› |
`includePurchaseUnitNames?` | Array‹string› |
`includeVersionNames?` | Array‹string› |
`includeRegionNames?` | Array‹string› |
`includeProductCategoryNames?` | Array‹string› |
`excludePartNumbers?` | Array‹string› |
`excludePublisherIds?` | Array‹number› |
`excludePublisherNames?` | Array‹string› |
`excludePoolNames?` | Array‹string› |
`excludeOperatingSystemNames?` | Array‹string› |
`excludeLevelNames?` | Array‹string› |
`excludeLanguageNames?` | Array‹string› |
`excludeLicenseAgreementTypeNames?` | Array‹string› |
`excludeLicenseTypeNames?` | Array‹string› |
`excludeProductFamilyNames?` | Array‹string› |
`excludeProductTypeNames?` | Array‹string› |
`excludeProgramNames?` | Array‹string› |
`excludeOfferingNames?` | Array‹string› |
`excludePurchasePeriodNames?` | Array‹string› |
`excludePurchaseUnitNames?` | Array‹string› |
`excludeVersionNames?` | Array‹string› |
`excludeRegionNames?` | Array‹string› |
`excludeProductCategoryNames?` | Array‹string› |
`sortKey?` | string |
`includeProductInformation?` | boolean |
`sortOrder?` | string |
`options?` | any |

**Returns:** *Promise‹[AgreementProductCollection](../interfaces/agreementproductcollection.md)›*

___

###  getAsExcelFile

▸ **getAsExcelFile**(`filter?`: [AgreementProductFilter](../modules/agreementproductfilter.md), `options?`: any): *Promise‹Response›*

**`throws`** {RequiredError}

**`memberof`** AgreementProductsApi

**Parameters:**

Name | Type |
------ | ------ |
`filter?` | [AgreementProductFilter](../modules/agreementproductfilter.md) |
`options?` | any |

**Returns:** *Promise‹Response›*

___

###  getOperationSdk133

▸ **getOperationSdk133**(`filter?`: [AgreementProductFilter](../modules/agreementproductfilter.md), `options?`: any): *Promise‹[AgreementProductCollection](../interfaces/agreementproductcollection.md)›*

**`throws`** {RequiredError}

**`memberof`** AgreementProductsApi

**Parameters:**

Name | Type |
------ | ------ |
`filter?` | [AgreementProductFilter](../modules/agreementproductfilter.md) |
`options?` | any |

**Returns:** *Promise‹[AgreementProductCollection](../interfaces/agreementproductcollection.md)›*

___

###  getSupportedBillingCycles

▸ **getSupportedBillingCycles**(`partNumber`: string, `resellerCustomerId?`: number, `options?`: any): *Promise‹string[]›*

**`throws`** {RequiredError}

**`memberof`** AgreementProductsApi

**Parameters:**

Name | Type |
------ | ------ |
`partNumber` | string |
`resellerCustomerId?` | number |
`options?` | any |

**Returns:** *Promise‹string[]›*
