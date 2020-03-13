[@bjerkio/crayon-api - v0.0.0](../README.md) › [CrayonAccountsApi](crayonaccountsapi.md)

# Class: CrayonAccountsApi

CrayonAccountsApi - object-oriented interface

**`export`** 

**`class`** CrayonAccountsApi

**`extends`** {BaseAPI}

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **CrayonAccountsApi**

## Index

### Constructors

* [constructor](crayonaccountsapi.md#constructor)

### Properties

* [basePath](crayonaccountsapi.md#protected-basepath)
* [configuration](crayonaccountsapi.md#protected-configuration)
* [fetch](crayonaccountsapi.md#protected-fetch)

### Methods

* [getCrayonAccountById](crayonaccountsapi.md#getcrayonaccountbyid)
* [getCrayonAccounts](crayonaccountsapi.md#getcrayonaccounts)
* [post](crayonaccountsapi.md#post)
* [put](crayonaccountsapi.md#put)

## Constructors

###  constructor

\+ **new CrayonAccountsApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `fetch`: [FetchAPI](../interfaces/fetchapi.md)): *[CrayonAccountsApi](crayonaccountsapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string |  BASE_PATH |
`fetch` | [FetchAPI](../interfaces/fetchapi.md) |  portableFetch |

**Returns:** *[CrayonAccountsApi](crayonaccountsapi.md)*

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

###  getCrayonAccountById

▸ **getCrayonAccountById**(`id`: number, `options?`: any): *Promise‹[CrayonAccount](../modules/crayonaccount.md)›*

**`throws`** {RequiredError}

**`memberof`** CrayonAccountsApi

**Parameters:**

Name | Type |
------ | ------ |
`id` | number |
`options?` | any |

**Returns:** *Promise‹[CrayonAccount](../modules/crayonaccount.md)›*

___

###  getCrayonAccounts

▸ **getCrayonAccounts**(`organizationId?`: number, `publisherId?`: number, `consumerId?`: number, `customerTenantType?`: string, `page?`: number, `pageSize?`: number, `search?`: string, `options?`: any): *Promise‹[ApiCollectionOfCrayonAccount](../interfaces/apicollectionofcrayonaccount.md)›*

**`throws`** {RequiredError}

**`memberof`** CrayonAccountsApi

**Parameters:**

Name | Type |
------ | ------ |
`organizationId?` | number |
`publisherId?` | number |
`consumerId?` | number |
`customerTenantType?` | string |
`page?` | number |
`pageSize?` | number |
`search?` | string |
`options?` | any |

**Returns:** *Promise‹[ApiCollectionOfCrayonAccount](../interfaces/apicollectionofcrayonaccount.md)›*

___

###  post

▸ **post**(`crayonAccount?`: [CrayonAccount](../modules/crayonaccount.md), `options?`: any): *Promise‹[CrayonAccount](../modules/crayonaccount.md)›*

**`throws`** {RequiredError}

**`memberof`** CrayonAccountsApi

**Parameters:**

Name | Type |
------ | ------ |
`crayonAccount?` | [CrayonAccount](../modules/crayonaccount.md) |
`options?` | any |

**Returns:** *Promise‹[CrayonAccount](../modules/crayonaccount.md)›*

___

###  put

▸ **put**(`id`: number, `crayonAccount?`: [CrayonAccount](../modules/crayonaccount.md), `options?`: any): *Promise‹[CrayonAccount](../modules/crayonaccount.md)›*

**`throws`** {RequiredError}

**`memberof`** CrayonAccountsApi

**Parameters:**

Name | Type |
------ | ------ |
`id` | number |
`crayonAccount?` | [CrayonAccount](../modules/crayonaccount.md) |
`options?` | any |

**Returns:** *Promise‹[CrayonAccount](../modules/crayonaccount.md)›*
