[@bjerkio/crayon-api - v0.0.0](../README.md) › [MeApi](meapi.md)

# Class: MeApi

MeApi - object-oriented interface

**`export`** 

**`class`** MeApi

**`extends`** {BaseAPI}

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **MeApi**

## Index

### Constructors

* [constructor](meapi.md#constructor)

### Properties

* [basePath](meapi.md#protected-basepath)
* [configuration](meapi.md#protected-configuration)
* [fetch](meapi.md#protected-fetch)

### Methods

* [get](meapi.md#get)

## Constructors

###  constructor

\+ **new MeApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `fetch`: [FetchAPI](../interfaces/fetchapi.md)): *[MeApi](meapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string |  BASE_PATH |
`fetch` | [FetchAPI](../interfaces/fetchapi.md) |  portableFetch |

**Returns:** *[MeApi](meapi.md)*

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

▸ **get**(`options?`: any): *Promise‹[Me](../interfaces/me.md)›*

**`throws`** {RequiredError}

**`memberof`** MeApi

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** *Promise‹[Me](../interfaces/me.md)›*
