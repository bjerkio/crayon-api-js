[@bjerkio/crayon-api - v0.0.0](../README.md) › [PingApi](pingapi.md)

# Class: PingApi

PingApi - object-oriented interface

**`export`** 

**`class`** PingApi

**`extends`** {BaseAPI}

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **PingApi**

## Index

### Constructors

* [constructor](pingapi.md#constructor)

### Properties

* [basePath](pingapi.md#protected-basepath)
* [configuration](pingapi.md#protected-configuration)
* [fetch](pingapi.md#protected-fetch)

### Methods

* [get](pingapi.md#get)

## Constructors

###  constructor

\+ **new PingApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `fetch`: [FetchAPI](../interfaces/fetchapi.md)): *[PingApi](pingapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string |  BASE_PATH |
`fetch` | [FetchAPI](../interfaces/fetchapi.md) |  portableFetch |

**Returns:** *[PingApi](pingapi.md)*

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

▸ **get**(`options?`: any): *Promise‹Response›*

**`throws`** {RequiredError}

**`memberof`** PingApi

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** *Promise‹Response›*
