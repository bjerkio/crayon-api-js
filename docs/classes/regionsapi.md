[@bjerkio/crayon-api - v0.0.0](../README.md) › [RegionsApi](regionsapi.md)

# Class: RegionsApi

RegionsApi - object-oriented interface

**`export`** 

**`class`** RegionsApi

**`extends`** {BaseAPI}

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **RegionsApi**

## Index

### Constructors

* [constructor](regionsapi.md#constructor)

### Properties

* [basePath](regionsapi.md#protected-basepath)
* [configuration](regionsapi.md#protected-configuration)
* [fetch](regionsapi.md#protected-fetch)

### Methods

* [get](regionsapi.md#get)
* [getByRegionCode](regionsapi.md#getbyregioncode)

## Constructors

###  constructor

\+ **new RegionsApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `fetch`: [FetchAPI](../interfaces/fetchapi.md)): *[RegionsApi](regionsapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string |  BASE_PATH |
`fetch` | [FetchAPI](../interfaces/fetchapi.md) |  portableFetch |

**Returns:** *[RegionsApi](regionsapi.md)*

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

▸ **get**(`regionList?`: string, `organizationId?`: number, `page?`: number, `pageSize?`: number, `search?`: string, `options?`: any): *Promise‹[ApiCollectionOfRegion](../interfaces/apicollectionofregion.md)›*

**`throws`** {RequiredError}

**`memberof`** RegionsApi

**Parameters:**

Name | Type |
------ | ------ |
`regionList?` | string |
`organizationId?` | number |
`page?` | number |
`pageSize?` | number |
`search?` | string |
`options?` | any |

**Returns:** *Promise‹[ApiCollectionOfRegion](../interfaces/apicollectionofregion.md)›*

___

###  getByRegionCode

▸ **getByRegionCode**(`regionCode?`: string, `regionList?`: string, `options?`: any): *Promise‹[Region](../interfaces/region.md)›*

**`throws`** {RequiredError}

**`memberof`** RegionsApi

**Parameters:**

Name | Type |
------ | ------ |
`regionCode?` | string |
`regionList?` | string |
`options?` | any |

**Returns:** *Promise‹[Region](../interfaces/region.md)›*
