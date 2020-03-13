[@bjerkio/crayon-api - v0.0.0](../README.md) › [ConsumersApi](consumersapi.md)

# Class: ConsumersApi

ConsumersApi - object-oriented interface

**`export`** 

**`class`** ConsumersApi

**`extends`** {BaseAPI}

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **ConsumersApi**

## Index

### Constructors

* [constructor](consumersapi.md#constructor)

### Properties

* [basePath](consumersapi.md#protected-basepath)
* [configuration](consumersapi.md#protected-configuration)
* [fetch](consumersapi.md#protected-fetch)

### Methods

* [addConsumer](consumersapi.md#addconsumer)
* [deleteConsumer](consumersapi.md#deleteconsumer)
* [get](consumersapi.md#get)
* [getConsumerById](consumersapi.md#getconsumerbyid)
* [updateConsumer](consumersapi.md#updateconsumer)

## Constructors

###  constructor

\+ **new ConsumersApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `fetch`: [FetchAPI](../interfaces/fetchapi.md)): *[ConsumersApi](consumersapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string |  BASE_PATH |
`fetch` | [FetchAPI](../interfaces/fetchapi.md) |  portableFetch |

**Returns:** *[ConsumersApi](consumersapi.md)*

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

###  addConsumer

▸ **addConsumer**(`consumer?`: [Consumer](../interfaces/consumer.md), `options?`: any): *Promise‹[Consumer](../interfaces/consumer.md)›*

**`throws`** {RequiredError}

**`memberof`** ConsumersApi

**Parameters:**

Name | Type |
------ | ------ |
`consumer?` | [Consumer](../interfaces/consumer.md) |
`options?` | any |

**Returns:** *Promise‹[Consumer](../interfaces/consumer.md)›*

___

###  deleteConsumer

▸ **deleteConsumer**(`id`: number, `options?`: any): *Promise‹boolean›*

**`throws`** {RequiredError}

**`memberof`** ConsumersApi

**Parameters:**

Name | Type |
------ | ------ |
`id` | number |
`options?` | any |

**Returns:** *Promise‹boolean›*

___

###  get

▸ **get**(`organizationId?`: number, `search?`: string, `page?`: number, `pageSize?`: number, `options?`: any): *Promise‹[ApiCollectionOfConsumer](../interfaces/apicollectionofconsumer.md)›*

**`throws`** {RequiredError}

**`memberof`** ConsumersApi

**Parameters:**

Name | Type |
------ | ------ |
`organizationId?` | number |
`search?` | string |
`page?` | number |
`pageSize?` | number |
`options?` | any |

**Returns:** *Promise‹[ApiCollectionOfConsumer](../interfaces/apicollectionofconsumer.md)›*

___

###  getConsumerById

▸ **getConsumerById**(`id`: number, `options?`: any): *Promise‹[Consumer](../interfaces/consumer.md)›*

**`throws`** {RequiredError}

**`memberof`** ConsumersApi

**Parameters:**

Name | Type |
------ | ------ |
`id` | number |
`options?` | any |

**Returns:** *Promise‹[Consumer](../interfaces/consumer.md)›*

___

###  updateConsumer

▸ **updateConsumer**(`id`: number, `consumer?`: [Consumer](../interfaces/consumer.md), `options?`: any): *Promise‹[Consumer](../interfaces/consumer.md)›*

**`throws`** {RequiredError}

**`memberof`** ConsumersApi

**Parameters:**

Name | Type |
------ | ------ |
`id` | number |
`consumer?` | [Consumer](../interfaces/consumer.md) |
`options?` | any |

**Returns:** *Promise‹[Consumer](../interfaces/consumer.md)›*
