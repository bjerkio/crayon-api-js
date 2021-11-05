[@bjerkio/crayon-api - v0.0.0](../README.md) › [AwsAccountsApi](awsaccountsapi.md)

# Class: AwsAccountsApi

AwsAccountsApi - object-oriented interface

**`export`** 

**`class`** AwsAccountsApi

**`extends`** {BaseAPI}

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **AwsAccountsApi**

## Index

### Constructors

* [constructor](awsaccountsapi.md#constructor)

### Properties

* [basePath](awsaccountsapi.md#protected-basepath)
* [configuration](awsaccountsapi.md#protected-configuration)
* [fetch](awsaccountsapi.md#protected-fetch)

### Methods

* [getAwsAccountById](awsaccountsapi.md#getawsaccountbyid)
* [getAwsAccounts](awsaccountsapi.md#getawsaccounts)
* [put](awsaccountsapi.md#put)

## Constructors

###  constructor

\+ **new AwsAccountsApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `fetch`: [FetchAPI](../interfaces/fetchapi.md)): *[AwsAccountsApi](awsaccountsapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string |  BASE_PATH |
`fetch` | [FetchAPI](../interfaces/fetchapi.md) |  portableFetch |

**Returns:** *[AwsAccountsApi](awsaccountsapi.md)*

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

###  getAwsAccountById

▸ **getAwsAccountById**(`id`: number, `options?`: any): *Promise‹[AwsAccount](../modules/awsaccount.md)›*

**`throws`** {RequiredError}

**`memberof`** AwsAccountsApi

**Parameters:**

Name | Type |
------ | ------ |
`id` | number |
`options?` | any |

**Returns:** *Promise‹[AwsAccount](../modules/awsaccount.md)›*

___

###  getAwsAccounts

▸ **getAwsAccounts**(`organizationId?`: number, `publisherId?`: number, `consumerId?`: number, `customerTenantType?`: "None" | "T1" | "T2", `page?`: number, `pageSize?`: number, `search?`: string, `options?`: any): *Promise‹[ApiCollectionOfAwsAccount](../interfaces/apicollectionofawsaccount.md)›*

**`throws`** {RequiredError}

**`memberof`** AwsAccountsApi

**Parameters:**

Name | Type |
------ | ------ |
`organizationId?` | number |
`publisherId?` | number |
`consumerId?` | number |
`customerTenantType?` | "None" &#124; "T1" &#124; "T2" |
`page?` | number |
`pageSize?` | number |
`search?` | string |
`options?` | any |

**Returns:** *Promise‹[ApiCollectionOfAwsAccount](../interfaces/apicollectionofawsaccount.md)›*

___

###  put

▸ **put**(`id`: number, `awsAccount?`: [AwsAccount](../modules/awsaccount.md), `options?`: any): *Promise‹[AwsAccount](../modules/awsaccount.md)›*

**`throws`** {RequiredError}

**`memberof`** AwsAccountsApi

**Parameters:**

Name | Type |
------ | ------ |
`id` | number |
`awsAccount?` | [AwsAccount](../modules/awsaccount.md) |
`options?` | any |

**Returns:** *Promise‹[AwsAccount](../modules/awsaccount.md)›*
