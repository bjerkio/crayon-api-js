[@bjerkio/crayon-api - v0.0.0](../README.md) › [SubscriptionsApi](subscriptionsapi.md)

# Class: SubscriptionsApi

SubscriptionsApi - object-oriented interface

**`export`** 

**`class`** SubscriptionsApi

**`extends`** {BaseAPI}

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **SubscriptionsApi**

## Index

### Constructors

* [constructor](subscriptionsapi.md#constructor)

### Properties

* [basePath](subscriptionsapi.md#protected-basepath)
* [configuration](subscriptionsapi.md#protected-configuration)
* [fetch](subscriptionsapi.md#protected-fetch)

### Methods

* [deleteSubscriptionTags](subscriptionsapi.md#deletesubscriptiontags)
* [get](subscriptionsapi.md#get)
* [getActivationLinkAsync](subscriptionsapi.md#getactivationlinkasync)
* [getRegisterReservedInstance](subscriptionsapi.md#getregisterreservedinstance)
* [getSubscriptionConversions](subscriptionsapi.md#getsubscriptionconversions)
* [getSubscriptionPriceTypes](subscriptionsapi.md#getsubscriptionpricetypes)
* [getSubscriptionTags](subscriptionsapi.md#getsubscriptiontags)
* [post](subscriptionsapi.md#post)
* [postSubscriptionConversion](subscriptionsapi.md#postsubscriptionconversion)
* [put](subscriptionsapi.md#put)
* [registerReservedInstance](subscriptionsapi.md#registerreservedinstance)
* [setSubscriptionTags](subscriptionsapi.md#setsubscriptiontags)
* [subscription](subscriptionsapi.md#subscription)

## Constructors

###  constructor

\+ **new SubscriptionsApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `fetch`: [FetchAPI](../interfaces/fetchapi.md)): *[SubscriptionsApi](subscriptionsapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string |  BASE_PATH |
`fetch` | [FetchAPI](../interfaces/fetchapi.md) |  portableFetch |

**Returns:** *[SubscriptionsApi](subscriptionsapi.md)*

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

###  deleteSubscriptionTags

▸ **deleteSubscriptionTags**(`subscriptionId`: number, `options?`: any): *Promise‹Response›*

**`throws`** {RequiredError}

**`memberof`** SubscriptionsApi

**Parameters:**

Name | Type |
------ | ------ |
`subscriptionId` | number |
`options?` | any |

**Returns:** *Promise‹Response›*

___

###  get

▸ **get**(`organizationId?`: number, `customerTenantId?`: number, `publisherId?`: number, `refresh?`: boolean, `statuses?`: "None" | "Active" | "Suspended" | "Deleted" | "CustomerCancellation" | "Converted" | "Inactive" | "All", `isTrial?`: boolean, `page?`: number, `pageSize?`: number, `search?`: string, `registeredForReservedInstance?`: boolean, `options?`: any): *Promise‹[ApiCollectionOfSubscription](../interfaces/apicollectionofsubscription.md)›*

**`throws`** {RequiredError}

**`memberof`** SubscriptionsApi

**Parameters:**

Name | Type |
------ | ------ |
`organizationId?` | number |
`customerTenantId?` | number |
`publisherId?` | number |
`refresh?` | boolean |
`statuses?` | "None" &#124; "Active" &#124; "Suspended" &#124; "Deleted" &#124; "CustomerCancellation" &#124; "Converted" &#124; "Inactive" &#124; "All" |
`isTrial?` | boolean |
`page?` | number |
`pageSize?` | number |
`search?` | string |
`registeredForReservedInstance?` | boolean |
`options?` | any |

**Returns:** *Promise‹[ApiCollectionOfSubscription](../interfaces/apicollectionofsubscription.md)›*

___

###  getActivationLinkAsync

▸ **getActivationLinkAsync**(`id`: number, `options?`: any): *Promise‹[ActivationLink](../interfaces/activationlink.md)›*

**`throws`** {RequiredError}

**`memberof`** SubscriptionsApi

**Parameters:**

Name | Type |
------ | ------ |
`id` | number |
`options?` | any |

**Returns:** *Promise‹[ActivationLink](../interfaces/activationlink.md)›*

___

###  getRegisterReservedInstance

▸ **getRegisterReservedInstance**(`id`: number, `reservedInstance`: boolean, `options?`: any): *Promise‹[ApiCollectionOfBoolean](../interfaces/apicollectionofboolean.md)›*

**`throws`** {RequiredError}

**`memberof`** SubscriptionsApi

**Parameters:**

Name | Type |
------ | ------ |
`id` | number |
`reservedInstance` | boolean |
`options?` | any |

**Returns:** *Promise‹[ApiCollectionOfBoolean](../interfaces/apicollectionofboolean.md)›*

___

###  getSubscriptionConversions

▸ **getSubscriptionConversions**(`subscriptionId`: number, `options?`: any): *Promise‹[ApiCollectionOfSubscriptionConversion](../interfaces/apicollectionofsubscriptionconversion.md)›*

**`throws`** {RequiredError}

**`memberof`** SubscriptionsApi

**Parameters:**

Name | Type |
------ | ------ |
`subscriptionId` | number |
`options?` | any |

**Returns:** *Promise‹[ApiCollectionOfSubscriptionConversion](../interfaces/apicollectionofsubscriptionconversion.md)›*

___

###  getSubscriptionPriceTypes

▸ **getSubscriptionPriceTypes**(`options?`: any): *Promise‹[ApiCollectionOfObjectReference](../interfaces/apicollectionofobjectreference.md)›*

**`throws`** {RequiredError}

**`memberof`** SubscriptionsApi

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** *Promise‹[ApiCollectionOfObjectReference](../interfaces/apicollectionofobjectreference.md)›*

___

###  getSubscriptionTags

▸ **getSubscriptionTags**(`subscriptionId`: number, `options?`: any): *Promise‹[SubscriptionTags](../interfaces/subscriptiontags.md)›*

**`throws`** {RequiredError}

**`memberof`** SubscriptionsApi

**Parameters:**

Name | Type |
------ | ------ |
`subscriptionId` | number |
`options?` | any |

**Returns:** *Promise‹[SubscriptionTags](../interfaces/subscriptiontags.md)›*

___

###  post

▸ **post**(`subscription?`: [SubscriptionDetailed](../modules/subscriptiondetailed.md), `options?`: any): *Promise‹[SubscriptionDetailed](../modules/subscriptiondetailed.md)›*

**`throws`** {RequiredError}

**`memberof`** SubscriptionsApi

**Parameters:**

Name | Type |
------ | ------ |
`subscription?` | [SubscriptionDetailed](../modules/subscriptiondetailed.md) |
`options?` | any |

**Returns:** *Promise‹[SubscriptionDetailed](../modules/subscriptiondetailed.md)›*

___

###  postSubscriptionConversion

▸ **postSubscriptionConversion**(`subscriptionId`: number, `conversion?`: [SubscriptionConversion](../modules/subscriptionconversion.md), `options?`: any): *Promise‹[SubscriptionDetailed](../modules/subscriptiondetailed.md)›*

**`throws`** {RequiredError}

**`memberof`** SubscriptionsApi

**Parameters:**

Name | Type |
------ | ------ |
`subscriptionId` | number |
`conversion?` | [SubscriptionConversion](../modules/subscriptionconversion.md) |
`options?` | any |

**Returns:** *Promise‹[SubscriptionDetailed](../modules/subscriptiondetailed.md)›*

___

###  put

▸ **put**(`id`: number, `subscription?`: [SubscriptionDetailed](../modules/subscriptiondetailed.md), `options?`: any): *Promise‹[SubscriptionDetailed](../modules/subscriptiondetailed.md)›*

**`throws`** {RequiredError}

**`memberof`** SubscriptionsApi

**Parameters:**

Name | Type |
------ | ------ |
`id` | number |
`subscription?` | [SubscriptionDetailed](../modules/subscriptiondetailed.md) |
`options?` | any |

**Returns:** *Promise‹[SubscriptionDetailed](../modules/subscriptiondetailed.md)›*

___

###  registerReservedInstance

▸ **registerReservedInstance**(`id`: number, `reservedInstance`: boolean, `options?`: any): *Promise‹boolean›*

**`throws`** {RequiredError}

**`memberof`** SubscriptionsApi

**Parameters:**

Name | Type |
------ | ------ |
`id` | number |
`reservedInstance` | boolean |
`options?` | any |

**Returns:** *Promise‹boolean›*

___

###  setSubscriptionTags

▸ **setSubscriptionTags**(`subscriptionId`: string, `tags?`: [SubscriptionTags](../interfaces/subscriptiontags.md), `options?`: any): *Promise‹boolean›*

**`throws`** {RequiredError}

**`memberof`** SubscriptionsApi

**Parameters:**

Name | Type |
------ | ------ |
`subscriptionId` | string |
`tags?` | [SubscriptionTags](../interfaces/subscriptiontags.md) |
`options?` | any |

**Returns:** *Promise‹boolean›*

___

###  subscription

▸ **subscription**(`id`: number, `options?`: any): *Promise‹[SubscriptionDetailed](../modules/subscriptiondetailed.md)›*

**`throws`** {RequiredError}

**`memberof`** SubscriptionsApi

**Parameters:**

Name | Type |
------ | ------ |
`id` | number |
`options?` | any |

**Returns:** *Promise‹[SubscriptionDetailed](../modules/subscriptiondetailed.md)›*
