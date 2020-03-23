[@bjerkio/crayon-api - v0.0.0](../README.md) › [BlogItemsApi](blogitemsapi.md)

# Class: BlogItemsApi

BlogItemsApi - object-oriented interface

**`export`** 

**`class`** BlogItemsApi

**`extends`** {BaseAPI}

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **BlogItemsApi**

## Index

### Constructors

* [constructor](blogitemsapi.md#constructor)

### Properties

* [basePath](blogitemsapi.md#protected-basepath)
* [configuration](blogitemsapi.md#protected-configuration)
* [fetch](blogitemsapi.md#protected-fetch)

### Methods

* [getForDirectCustomers](blogitemsapi.md#getfordirectcustomers)

## Constructors

###  constructor

\+ **new BlogItemsApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `fetch`: [FetchAPI](../interfaces/fetchapi.md)): *[BlogItemsApi](blogitemsapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string |  BASE_PATH |
`fetch` | [FetchAPI](../interfaces/fetchapi.md) |  portableFetch |

**Returns:** *[BlogItemsApi](blogitemsapi.md)*

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

###  getForDirectCustomers

▸ **getForDirectCustomers**(`count?`: number, `organizationId?`: number, `options?`: any): *Promise‹[ApiCollectionOfBlogItem](../interfaces/apicollectionofblogitem.md)›*

**`throws`** {RequiredError}

**`memberof`** BlogItemsApi

**Parameters:**

Name | Type |
------ | ------ |
`count?` | number |
`organizationId?` | number |
`options?` | any |

**Returns:** *Promise‹[ApiCollectionOfBlogItem](../interfaces/apicollectionofblogitem.md)›*
