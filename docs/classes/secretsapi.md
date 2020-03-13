[@bjerkio/crayon-api - v0.0.0](../README.md) › [SecretsApi](secretsapi.md)

# Class: SecretsApi

SecretsApi - object-oriented interface

**`export`** 

**`class`** SecretsApi

**`extends`** {BaseAPI}

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **SecretsApi**

## Index

### Constructors

* [constructor](secretsapi.md#constructor)

### Properties

* [basePath](secretsapi.md#protected-basepath)
* [configuration](secretsapi.md#protected-configuration)
* [fetch](secretsapi.md#protected-fetch)

### Methods

* [_delete](secretsapi.md#_delete)
* [post](secretsapi.md#post)

## Constructors

###  constructor

\+ **new SecretsApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `fetch`: [FetchAPI](../interfaces/fetchapi.md)): *[SecretsApi](secretsapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string |  BASE_PATH |
`fetch` | [FetchAPI](../interfaces/fetchapi.md) |  portableFetch |

**Returns:** *[SecretsApi](secretsapi.md)*

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

###  _delete

▸ **_delete**(`clientId?`: string, `secretId?`: number, `options?`: any): *Promise‹boolean›*

**`throws`** {RequiredError}

**`memberof`** SecretsApi

**Parameters:**

Name | Type |
------ | ------ |
`clientId?` | string |
`secretId?` | number |
`options?` | any |

**Returns:** *Promise‹boolean›*

___

###  post

▸ **post**(`secret?`: [Secret](../interfaces/secret.md), `options?`: any): *Promise‹[Secret](../interfaces/secret.md)›*

**`throws`** {RequiredError}

**`memberof`** SecretsApi

**Parameters:**

Name | Type |
------ | ------ |
`secret?` | [Secret](../interfaces/secret.md) |
`options?` | any |

**Returns:** *Promise‹[Secret](../interfaces/secret.md)›*
