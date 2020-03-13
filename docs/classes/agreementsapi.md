[@bjerkio/crayon-api - v0.0.0](../README.md) › [AgreementsApi](agreementsapi.md)

# Class: AgreementsApi

AgreementsApi - object-oriented interface

**`export`** 

**`class`** AgreementsApi

**`extends`** {BaseAPI}

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **AgreementsApi**

## Index

### Constructors

* [constructor](agreementsapi.md#constructor)

### Properties

* [basePath](agreementsapi.md#protected-basepath)
* [configuration](agreementsapi.md#protected-configuration)
* [fetch](agreementsapi.md#protected-fetch)

### Methods

* [get](agreementsapi.md#get)

## Constructors

###  constructor

\+ **new AgreementsApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `fetch`: [FetchAPI](../interfaces/fetchapi.md)): *[AgreementsApi](agreementsapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string |  BASE_PATH |
`fetch` | [FetchAPI](../interfaces/fetchapi.md) |  portableFetch |

**Returns:** *[AgreementsApi](agreementsapi.md)*

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

▸ **get**(`organizationId?`: number, `organizationIds?`: Array‹number›, `pricelistIds?`: Array‹number›, `status?`: string, `agreementTypes?`: Array‹string›, `publisherIds?`: Array‹number›, `programIds?`: Array‹number›, `searchDate?`: Date, `agreementIds?`: Array‹number›, `salesPriceCurrency?`: string, `termRequired?`: boolean, `publisherId?`: number, `endDateFrom?`: Date, `endDateTo?`: Date, `page?`: number, `pageSize?`: number, `search?`: string, `options?`: any): *Promise‹[AgreementCollection](../interfaces/agreementcollection.md)›*

**`throws`** {RequiredError}

**`memberof`** AgreementsApi

**Parameters:**

Name | Type |
------ | ------ |
`organizationId?` | number |
`organizationIds?` | Array‹number› |
`pricelistIds?` | Array‹number› |
`status?` | string |
`agreementTypes?` | Array‹string› |
`publisherIds?` | Array‹number› |
`programIds?` | Array‹number› |
`searchDate?` | Date |
`agreementIds?` | Array‹number› |
`salesPriceCurrency?` | string |
`termRequired?` | boolean |
`publisherId?` | number |
`endDateFrom?` | Date |
`endDateTo?` | Date |
`page?` | number |
`pageSize?` | number |
`search?` | string |
`options?` | any |

**Returns:** *Promise‹[AgreementCollection](../interfaces/agreementcollection.md)›*
