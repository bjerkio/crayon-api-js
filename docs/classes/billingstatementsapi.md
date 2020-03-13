[@bjerkio/crayon-api - v0.0.0](../README.md) › [BillingStatementsApi](billingstatementsapi.md)

# Class: BillingStatementsApi

BillingStatementsApi - object-oriented interface

**`export`** 

**`class`** BillingStatementsApi

**`extends`** {BaseAPI}

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **BillingStatementsApi**

## Index

### Constructors

* [constructor](billingstatementsapi.md#constructor)

### Properties

* [basePath](billingstatementsapi.md#protected-basepath)
* [configuration](billingstatementsapi.md#protected-configuration)
* [fetch](billingstatementsapi.md#protected-fetch)

### Methods

* [getBillingRecordsFile](billingstatementsapi.md#getbillingrecordsfile)
* [getBillingStatementFile](billingstatementsapi.md#getbillingstatementfile)
* [getBillingStatements](billingstatementsapi.md#getbillingstatements)
* [getGroupedBillingStatements](billingstatementsapi.md#getgroupedbillingstatements)
* [getReconciliationFile](billingstatementsapi.md#getreconciliationfile)

## Constructors

###  constructor

\+ **new BillingStatementsApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `fetch`: [FetchAPI](../interfaces/fetchapi.md)): *[BillingStatementsApi](billingstatementsapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string |  BASE_PATH |
`fetch` | [FetchAPI](../interfaces/fetchapi.md) |  portableFetch |

**Returns:** *[BillingStatementsApi](billingstatementsapi.md)*

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

###  getBillingRecordsFile

▸ **getBillingRecordsFile**(`id`: number, `options?`: any): *Promise‹Response›*

**`throws`** {RequiredError}

**`memberof`** BillingStatementsApi

**Parameters:**

Name | Type |
------ | ------ |
`id` | number |
`options?` | any |

**Returns:** *Promise‹Response›*

___

###  getBillingStatementFile

▸ **getBillingStatementFile**(`id`: number, `options?`: any): *Promise‹Response›*

**`throws`** {RequiredError}

**`memberof`** BillingStatementsApi

**Parameters:**

Name | Type |
------ | ------ |
`id` | number |
`options?` | any |

**Returns:** *Promise‹Response›*

___

###  getBillingStatements

▸ **getBillingStatements**(`invoiceProfileId?`: number, `organizationId?`: number, `provisionType?`: string, `from?`: Date, `to?`: Date, `page?`: number, `pageSize?`: number, `options?`: any): *Promise‹[ApiCollectionOfBillingStatement](../interfaces/apicollectionofbillingstatement.md)›*

**`throws`** {RequiredError}

**`memberof`** BillingStatementsApi

**Parameters:**

Name | Type |
------ | ------ |
`invoiceProfileId?` | number |
`organizationId?` | number |
`provisionType?` | string |
`from?` | Date |
`to?` | Date |
`page?` | number |
`pageSize?` | number |
`options?` | any |

**Returns:** *Promise‹[ApiCollectionOfBillingStatement](../interfaces/apicollectionofbillingstatement.md)›*

___

###  getGroupedBillingStatements

▸ **getGroupedBillingStatements**(`invoiceProfileId?`: number, `organizationId?`: number, `provisionType?`: string, `from?`: Date, `to?`: Date, `page?`: number, `pageSize?`: number, `options?`: any): *Promise‹[ApiCollectionOfGroupedBillingStatement](../interfaces/apicollectionofgroupedbillingstatement.md)›*

**`throws`** {RequiredError}

**`memberof`** BillingStatementsApi

**Parameters:**

Name | Type |
------ | ------ |
`invoiceProfileId?` | number |
`organizationId?` | number |
`provisionType?` | string |
`from?` | Date |
`to?` | Date |
`page?` | number |
`pageSize?` | number |
`options?` | any |

**Returns:** *Promise‹[ApiCollectionOfGroupedBillingStatement](../interfaces/apicollectionofgroupedbillingstatement.md)›*

___

###  getReconciliationFile

▸ **getReconciliationFile**(`id`: number, `options?`: any): *Promise‹Response›*

**`throws`** {RequiredError}

**`memberof`** BillingStatementsApi

**Parameters:**

Name | Type |
------ | ------ |
`id` | number |
`options?` | any |

**Returns:** *Promise‹Response›*
