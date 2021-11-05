[@bjerkio/crayon-api - v0.0.0](../README.md) › [CustomerTenantAgreementsApi](customertenantagreementsapi.md)

# Class: CustomerTenantAgreementsApi

CustomerTenantAgreementsApi - object-oriented interface

**`export`** 

**`class`** CustomerTenantAgreementsApi

**`extends`** {BaseAPI}

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **CustomerTenantAgreementsApi**

## Index

### Constructors

* [constructor](customertenantagreementsapi.md#constructor)

### Properties

* [basePath](customertenantagreementsapi.md#protected-basepath)
* [configuration](customertenantagreementsapi.md#protected-configuration)
* [fetch](customertenantagreementsapi.md#protected-fetch)

### Methods

* [add](customertenantagreementsapi.md#add)
* [get](customertenantagreementsapi.md#get)

## Constructors

###  constructor

\+ **new CustomerTenantAgreementsApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `fetch`: [FetchAPI](../interfaces/fetchapi.md)): *[CustomerTenantAgreementsApi](customertenantagreementsapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string |  BASE_PATH |
`fetch` | [FetchAPI](../interfaces/fetchapi.md) |  portableFetch |

**Returns:** *[CustomerTenantAgreementsApi](customertenantagreementsapi.md)*

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

###  add

▸ **add**(`customerTenantId`: number, `agreement?`: [ServiceAccountAgreement](../modules/serviceaccountagreement.md), `options?`: any): *Promise‹[ServiceAccountAgreement](../modules/serviceaccountagreement.md)›*

**`throws`** {RequiredError}

**`memberof`** CustomerTenantAgreementsApi

**Parameters:**

Name | Type |
------ | ------ |
`customerTenantId` | number |
`agreement?` | [ServiceAccountAgreement](../modules/serviceaccountagreement.md) |
`options?` | any |

**Returns:** *Promise‹[ServiceAccountAgreement](../modules/serviceaccountagreement.md)›*

___

###  get

▸ **get**(`customerTenantId`: number, `agreementTypeConsent?`: "MicrosoftCloudAgreement" | "MicrosoftCustomerAgreement", `options?`: any): *Promise‹[ApiCollectionOfServiceAccountAgreement](../interfaces/apicollectionofserviceaccountagreement.md)›*

**`throws`** {RequiredError}

**`memberof`** CustomerTenantAgreementsApi

**Parameters:**

Name | Type |
------ | ------ |
`customerTenantId` | number |
`agreementTypeConsent?` | "MicrosoftCloudAgreement" &#124; "MicrosoftCustomerAgreement" |
`options?` | any |

**Returns:** *Promise‹[ApiCollectionOfServiceAccountAgreement](../interfaces/apicollectionofserviceaccountagreement.md)›*
