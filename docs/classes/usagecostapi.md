[@bjerkio/crayon-api - v0.0.0](../README.md) › [UsageCostApi](usagecostapi.md)

# Class: UsageCostApi

UsageCostApi - object-oriented interface

**`export`** 

**`class`** UsageCostApi

**`extends`** {BaseAPI}

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **UsageCostApi**

## Index

### Constructors

* [constructor](usagecostapi.md#constructor)

### Properties

* [basePath](usagecostapi.md#protected-basepath)
* [configuration](usagecostapi.md#protected-configuration)
* [fetch](usagecostapi.md#protected-fetch)

### Methods

* [getForCategory](usagecostapi.md#getforcategory)
* [getForCategory_1](usagecostapi.md#getforcategory_1)
* [getForOrganization](usagecostapi.md#getfororganization)
* [getForResourceGroup](usagecostapi.md#getforresourcegroup)
* [getForResourceGroup_2](usagecostapi.md#getforresourcegroup_2)
* [getForSubcategory](usagecostapi.md#getforsubcategory)
* [getForSubcategory_3](usagecostapi.md#getforsubcategory_3)
* [getForSubscription](usagecostapi.md#getforsubscription)
* [getForSubscriptionWithResourceGroups](usagecostapi.md#getforsubscriptionwithresourcegroups)
* [getForSubscriptionWithResourceGroups_4](usagecostapi.md#getforsubscriptionwithresourcegroups_4)
* [getForSubscription_5](usagecostapi.md#getforsubscription_5)

## Constructors

###  constructor

\+ **new UsageCostApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `fetch`: [FetchAPI](../interfaces/fetchapi.md)): *[UsageCostApi](usagecostapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string |  BASE_PATH |
`fetch` | [FetchAPI](../interfaces/fetchapi.md) |  portableFetch |

**Returns:** *[UsageCostApi](usagecostapi.md)*

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

###  getForCategory

▸ **getForCategory**(`resellerCustomerId`: number, `subscriptionId`: string, `category`: string, `currencyCode`: string, `from?`: Date, `to?`: Date, `options?`: any): *Promise‹[ApiCollectionOfCategoryUsageCost](../interfaces/apicollectionofcategoryusagecost.md)›*

**`throws`** {RequiredError}

**`memberof`** UsageCostApi

**Parameters:**

Name | Type |
------ | ------ |
`resellerCustomerId` | number |
`subscriptionId` | string |
`category` | string |
`currencyCode` | string |
`from?` | Date |
`to?` | Date |
`options?` | any |

**Returns:** *Promise‹[ApiCollectionOfCategoryUsageCost](../interfaces/apicollectionofcategoryusagecost.md)›*

___

###  getForCategory_1

▸ **getForCategory_1**(`model?`: [CategoryUsageCostRequest](../interfaces/categoryusagecostrequest.md), `options?`: any): *Promise‹[ApiCollectionOfCategoryUsageCost](../interfaces/apicollectionofcategoryusagecost.md)›*

**`throws`** {RequiredError}

**`memberof`** UsageCostApi

**Parameters:**

Name | Type |
------ | ------ |
`model?` | [CategoryUsageCostRequest](../interfaces/categoryusagecostrequest.md) |
`options?` | any |

**Returns:** *Promise‹[ApiCollectionOfCategoryUsageCost](../interfaces/apicollectionofcategoryusagecost.md)›*

___

###  getForOrganization

▸ **getForOrganization**(`organizationId`: number, `from?`: Date, `to?`: Date, `options?`: any): *Promise‹[ApiCollectionOfOrganizationUsageCost](../interfaces/apicollectionoforganizationusagecost.md)›*

**`throws`** {RequiredError}

**`memberof`** UsageCostApi

**Parameters:**

Name | Type |
------ | ------ |
`organizationId` | number |
`from?` | Date |
`to?` | Date |
`options?` | any |

**Returns:** *Promise‹[ApiCollectionOfOrganizationUsageCost](../interfaces/apicollectionoforganizationusagecost.md)›*

___

###  getForResourceGroup

▸ **getForResourceGroup**(`resellerCustomerId`: number, `subscriptionId`: string, `resourceGroup`: string, `currencyCode`: string, `from?`: Date, `to?`: Date, `options?`: any): *Promise‹[ApiCollectionOfResourceGroupUsageCost](../interfaces/apicollectionofresourcegroupusagecost.md)›*

**`throws`** {RequiredError}

**`memberof`** UsageCostApi

**Parameters:**

Name | Type |
------ | ------ |
`resellerCustomerId` | number |
`subscriptionId` | string |
`resourceGroup` | string |
`currencyCode` | string |
`from?` | Date |
`to?` | Date |
`options?` | any |

**Returns:** *Promise‹[ApiCollectionOfResourceGroupUsageCost](../interfaces/apicollectionofresourcegroupusagecost.md)›*

___

###  getForResourceGroup_2

▸ **getForResourceGroup_2**(`model?`: [ResourceGroupUsageCostRequest](../interfaces/resourcegroupusagecostrequest.md), `options?`: any): *Promise‹[ApiCollectionOfResourceGroupUsageCost](../interfaces/apicollectionofresourcegroupusagecost.md)›*

**`throws`** {RequiredError}

**`memberof`** UsageCostApi

**Parameters:**

Name | Type |
------ | ------ |
`model?` | [ResourceGroupUsageCostRequest](../interfaces/resourcegroupusagecostrequest.md) |
`options?` | any |

**Returns:** *Promise‹[ApiCollectionOfResourceGroupUsageCost](../interfaces/apicollectionofresourcegroupusagecost.md)›*

___

###  getForSubcategory

▸ **getForSubcategory**(`resellerCustomerId`: number, `subscriptionId`: string, `category`: string, `subcategory`: string, `currencyCode`: string, `from?`: Date, `to?`: Date, `options?`: any): *Promise‹[ApiCollectionOfSubcategoryUsageCost](../interfaces/apicollectionofsubcategoryusagecost.md)›*

**`throws`** {RequiredError}

**`memberof`** UsageCostApi

**Parameters:**

Name | Type |
------ | ------ |
`resellerCustomerId` | number |
`subscriptionId` | string |
`category` | string |
`subcategory` | string |
`currencyCode` | string |
`from?` | Date |
`to?` | Date |
`options?` | any |

**Returns:** *Promise‹[ApiCollectionOfSubcategoryUsageCost](../interfaces/apicollectionofsubcategoryusagecost.md)›*

___

###  getForSubcategory_3

▸ **getForSubcategory_3**(`model?`: [SubcategoryUsageCostRequest](../interfaces/subcategoryusagecostrequest.md), `options?`: any): *Promise‹[ApiCollectionOfSubcategoryUsageCost](../interfaces/apicollectionofsubcategoryusagecost.md)›*

**`throws`** {RequiredError}

**`memberof`** UsageCostApi

**Parameters:**

Name | Type |
------ | ------ |
`model?` | [SubcategoryUsageCostRequest](../interfaces/subcategoryusagecostrequest.md) |
`options?` | any |

**Returns:** *Promise‹[ApiCollectionOfSubcategoryUsageCost](../interfaces/apicollectionofsubcategoryusagecost.md)›*

___

###  getForSubscription

▸ **getForSubscription**(`resellerCustomerId`: number, `subscriptionId`: string, `currencyCode`: string, `from?`: Date, `to?`: Date, `options?`: any): *Promise‹[ApiCollectionOfSubscriptionUsageCost](../interfaces/apicollectionofsubscriptionusagecost.md)›*

**`throws`** {RequiredError}

**`memberof`** UsageCostApi

**Parameters:**

Name | Type |
------ | ------ |
`resellerCustomerId` | number |
`subscriptionId` | string |
`currencyCode` | string |
`from?` | Date |
`to?` | Date |
`options?` | any |

**Returns:** *Promise‹[ApiCollectionOfSubscriptionUsageCost](../interfaces/apicollectionofsubscriptionusagecost.md)›*

___

###  getForSubscriptionWithResourceGroups

▸ **getForSubscriptionWithResourceGroups**(`resellerCustomerId`: number, `subscriptionId`: string, `currencyCode`: string, `from?`: Date, `to?`: Date, `options?`: any): *Promise‹[ApiCollectionOfSubscriptionResourceGroupUsageCost](../interfaces/apicollectionofsubscriptionresourcegroupusagecost.md)›*

**`throws`** {RequiredError}

**`memberof`** UsageCostApi

**Parameters:**

Name | Type |
------ | ------ |
`resellerCustomerId` | number |
`subscriptionId` | string |
`currencyCode` | string |
`from?` | Date |
`to?` | Date |
`options?` | any |

**Returns:** *Promise‹[ApiCollectionOfSubscriptionResourceGroupUsageCost](../interfaces/apicollectionofsubscriptionresourcegroupusagecost.md)›*

___

###  getForSubscriptionWithResourceGroups_4

▸ **getForSubscriptionWithResourceGroups_4**(`model?`: [SubscriptionUsageCostRequest](../interfaces/subscriptionusagecostrequest.md), `options?`: any): *Promise‹[ApiCollectionOfSubscriptionResourceGroupUsageCost](../interfaces/apicollectionofsubscriptionresourcegroupusagecost.md)›*

**`throws`** {RequiredError}

**`memberof`** UsageCostApi

**Parameters:**

Name | Type |
------ | ------ |
`model?` | [SubscriptionUsageCostRequest](../interfaces/subscriptionusagecostrequest.md) |
`options?` | any |

**Returns:** *Promise‹[ApiCollectionOfSubscriptionResourceGroupUsageCost](../interfaces/apicollectionofsubscriptionresourcegroupusagecost.md)›*

___

###  getForSubscription_5

▸ **getForSubscription_5**(`model?`: [SubscriptionUsageCostRequest](../interfaces/subscriptionusagecostrequest.md), `options?`: any): *Promise‹[ApiCollectionOfSubscriptionUsageCost](../interfaces/apicollectionofsubscriptionusagecost.md)›*

**`throws`** {RequiredError}

**`memberof`** UsageCostApi

**Parameters:**

Name | Type |
------ | ------ |
`model?` | [SubscriptionUsageCostRequest](../interfaces/subscriptionusagecostrequest.md) |
`options?` | any |

**Returns:** *Promise‹[ApiCollectionOfSubscriptionUsageCost](../interfaces/apicollectionofsubscriptionusagecost.md)›*
