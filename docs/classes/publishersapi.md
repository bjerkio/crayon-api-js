[@bjerkio/crayon-api - v0.0.0](../README.md) › [PublishersApi](publishersapi.md)

# Class: PublishersApi

PublishersApi - object-oriented interface

**`export`** 

**`class`** PublishersApi

**`extends`** {BaseAPI}

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **PublishersApi**

## Index

### Constructors

* [constructor](publishersapi.md#constructor)

### Properties

* [basePath](publishersapi.md#protected-basepath)
* [configuration](publishersapi.md#protected-configuration)
* [fetch](publishersapi.md#protected-fetch)

### Methods

* [get](publishersapi.md#get)
* [getById](publishersapi.md#getbyid)

## Constructors

###  constructor

\+ **new PublishersApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `fetch`: [FetchAPI](../interfaces/fetchapi.md)): *[PublishersApi](publishersapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string |  BASE_PATH |
`fetch` | [FetchAPI](../interfaces/fetchapi.md) |  portableFetch |

**Returns:** *[PublishersApi](publishersapi.md)*

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

▸ **get**(`names?`: Array‹string›, `page?`: number, `pageSize?`: number, `search?`: string, `programType?`: "None" | "License" | "Report" | "Cloud", `options?`: any): *Promise‹[ApiCollectionOfPublisher](../interfaces/apicollectionofpublisher.md)›*

**`throws`** {RequiredError}

**`memberof`** PublishersApi

**Parameters:**

Name | Type |
------ | ------ |
`names?` | Array‹string› |
`page?` | number |
`pageSize?` | number |
`search?` | string |
`programType?` | "None" &#124; "License" &#124; "Report" &#124; "Cloud" |
`options?` | any |

**Returns:** *Promise‹[ApiCollectionOfPublisher](../interfaces/apicollectionofpublisher.md)›*

___

###  getById

▸ **getById**(`id`: number, `options?`: any): *Promise‹[Publisher](../interfaces/publisher.md)›*

**`throws`** {RequiredError}

**`memberof`** PublishersApi

**Parameters:**

Name | Type |
------ | ------ |
`id` | number |
`options?` | any |

**Returns:** *Promise‹[Publisher](../interfaces/publisher.md)›*
