[@bjerkio/crayon-api - v0.0.0](../README.md) › [AgreementReportsApi](agreementreportsapi.md)

# Class: AgreementReportsApi

AgreementReportsApi - object-oriented interface

**`export`** 

**`class`** AgreementReportsApi

**`extends`** {BaseAPI}

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **AgreementReportsApi**

## Index

### Constructors

* [constructor](agreementreportsapi.md#constructor)

### Properties

* [basePath](agreementreportsapi.md#protected-basepath)
* [configuration](agreementreportsapi.md#protected-configuration)
* [fetch](agreementreportsapi.md#protected-fetch)

### Methods

* [get](agreementreportsapi.md#get)
* [update](agreementreportsapi.md#update)

## Constructors

###  constructor

\+ **new AgreementReportsApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `fetch`: [FetchAPI](../interfaces/fetchapi.md)): *[AgreementReportsApi](agreementreportsapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string |  BASE_PATH |
`fetch` | [FetchAPI](../interfaces/fetchapi.md) |  portableFetch |

**Returns:** *[AgreementReportsApi](agreementreportsapi.md)*

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

▸ **get**(`productContainerId`: number, `options?`: any): *Promise‹[ApiCollectionOfAgreementReport](../interfaces/apicollectionofagreementreport.md)›*

**`throws`** {RequiredError}

**`memberof`** AgreementReportsApi

**Parameters:**

Name | Type |
------ | ------ |
`productContainerId` | number |
`options?` | any |

**Returns:** *Promise‹[ApiCollectionOfAgreementReport](../interfaces/apicollectionofagreementreport.md)›*

___

###  update

▸ **update**(`agreementId`: number, `agreementReport?`: [AgreementReport](../modules/agreementreport.md), `options?`: any): *Promise‹[AgreementReport](../modules/agreementreport.md)›*

**`throws`** {RequiredError}

**`memberof`** AgreementReportsApi

**Parameters:**

Name | Type |
------ | ------ |
`agreementId` | number |
`agreementReport?` | [AgreementReport](../modules/agreementreport.md) |
`options?` | any |

**Returns:** *Promise‹[AgreementReport](../modules/agreementreport.md)›*
