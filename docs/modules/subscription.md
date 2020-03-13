[@bjerkio/crayon-api - v0.0.0](../README.md) › [Subscription](subscription.md)

# Module: Subscription

**`export`** 

**`namespace`** Subscription

## Index

### Enumerations

* [BillingCycleEnum](../enums/subscription.billingcycleenum.md)
* [PriceTypeEnum](../enums/subscription.pricetypeenum.md)
* [ProvisionTypeEnum](../enums/subscription.provisiontypeenum.md)
* [StatusEnum](../enums/subscription.statusenum.md)

### Properties

* [availableAddonsCount](subscription.md#optional-availableaddonscount)
* [billingCycle](subscription.md#optional-billingcycle)
* [creationDate](subscription.md#optional-creationdate)
* [customerTenant](subscription.md#optional-customertenant)
* [endDate](subscription.md#optional-enddate)
* [entitlementId](subscription.md#optional-entitlementid)
* [id](subscription.md#optional-id)
* [invoiceProfile](subscription.md#optional-invoiceprofile)
* [isTrial](subscription.md#optional-istrial)
* [markup](subscription.md#optional-markup)
* [name](subscription.md#optional-name)
* [orderId](subscription.md#optional-orderid)
* [organization](subscription.md#optional-organization)
* [priceType](subscription.md#optional-pricetype)
* [product](subscription.md#optional-product)
* [provisionType](subscription.md#optional-provisiontype)
* [publisher](subscription.md#optional-publisher)
* [publisherSubscriptionId](subscription.md#optional-publishersubscriptionid)
* [quantity](subscription.md#optional-quantity)
* [registeredForReservedInstance](subscription.md#optional-registeredforreservedinstance)
* [salesPrice](subscription.md#optional-salesprice)
* [startDate](subscription.md#optional-startdate)
* [status](subscription.md#optional-status)
* [subscriptionTags](subscription.md#optional-subscriptiontags)
* [subscriptions](subscription.md#optional-subscriptions)

## Properties

### `Optional` availableAddonsCount

• **availableAddonsCount**? : *number*

**`type`** {number}

**`memberof`** Subscription

___

### `Optional` billingCycle

• **billingCycle**? : *[BillingCycleEnum](../enums/subscription.billingcycleenum.md)*

**`type`** {string}

**`memberof`** Subscription

___

### `Optional` creationDate

• **creationDate**? : *Date*

**`type`** {Date}

**`memberof`** Subscription

___

### `Optional` customerTenant

• **customerTenant**? : *[CustomerTenantReference](../interfaces/customertenantreference.md)*

**`type`** {CustomerTenantReference}

**`memberof`** Subscription

___

### `Optional` endDate

• **endDate**? : *Date*

**`type`** {Date}

**`memberof`** Subscription

___

### `Optional` entitlementId

• **entitlementId**? : *string*

**`type`** {string}

**`memberof`** Subscription

___

### `Optional` id

• **id**? : *number*

**`type`** {number}

**`memberof`** Subscription

___

### `Optional` invoiceProfile

• **invoiceProfile**? : *[ObjectReference](../interfaces/objectreference.md)*

**`type`** {ObjectReference}

**`memberof`** Subscription

___

### `Optional` isTrial

• **isTrial**? : *boolean*

**`type`** {boolean}

**`memberof`** Subscription

___

### `Optional` markup

• **markup**? : *number*

**`type`** {number}

**`memberof`** Subscription

___

### `Optional` name

• **name**? : *string*

**`type`** {string}

**`memberof`** Subscription

___

### `Optional` orderId

• **orderId**? : *string*

**`type`** {string}

**`memberof`** Subscription

___

### `Optional` organization

• **organization**? : *[ObjectReference](../interfaces/objectreference.md)*

**`type`** {ObjectReference}

**`memberof`** Subscription

___

### `Optional` priceType

• **priceType**? : *[PriceTypeEnum](../enums/subscription.pricetypeenum.md)*

**`type`** {string}

**`memberof`** Subscription

___

### `Optional` product

• **product**? : *[ProductReference](../interfaces/productreference.md)*

**`type`** {ProductReference}

**`memberof`** Subscription

___

### `Optional` provisionType

• **provisionType**? : *[ProvisionTypeEnum](../enums/subscription.provisiontypeenum.md)*

**`type`** {string}

**`memberof`** Subscription

___

### `Optional` publisher

• **publisher**? : *[ObjectReference](../interfaces/objectreference.md)*

**`type`** {ObjectReference}

**`memberof`** Subscription

___

### `Optional` publisherSubscriptionId

• **publisherSubscriptionId**? : *string*

**`type`** {string}

**`memberof`** Subscription

___

### `Optional` quantity

• **quantity**? : *number*

**`type`** {number}

**`memberof`** Subscription

___

### `Optional` registeredForReservedInstance

• **registeredForReservedInstance**? : *boolean*

**`type`** {boolean}

**`memberof`** Subscription

___

### `Optional` salesPrice

• **salesPrice**? : *number*

**`type`** {number}

**`memberof`** Subscription

___

### `Optional` startDate

• **startDate**? : *Date*

**`type`** {Date}

**`memberof`** Subscription

___

### `Optional` status

• **status**? : *[StatusEnum](../enums/subscription.statusenum.md)*

**`type`** {string}

**`memberof`** Subscription

___

### `Optional` subscriptionTags

• **subscriptionTags**? : *[SubscriptionTags](../interfaces/subscriptiontags.md)*

**`type`** {SubscriptionTags}

**`memberof`** Subscription

___

### `Optional` subscriptions

• **subscriptions**? : *Array‹[SubscriptionAddOn](subscriptionaddon.md)›*

**`type`** {Array&lt;SubscriptionAddOn&gt;}

**`memberof`** Subscription
