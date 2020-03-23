[@bjerkio/crayon-api - v0.0.0](../README.md) › [AssetOrderLine](assetorderline.md)

# Module: AssetOrderLine

**`export`** 

**`namespace`** AssetOrderLine

## Index

### Enumerations

* [BillingCycleEnum](../enums/assetorderline.billingcycleenum.md)
* [ResellerPriceTypeEnum](../enums/assetorderline.resellerpricetypeenum.md)
* [ScopeEnum](../enums/assetorderline.scopeenum.md)
* [TypeEnum](../enums/assetorderline.typeenum.md)

### Properties

* [armRegionName](assetorderline.md#optional-armregionname)
* [billingCycle](assetorderline.md#optional-billingcycle)
* [catalogItemId](assetorderline.md#optional-catalogitemid)
* [errors](assetorderline.md#optional-errors)
* [productId](assetorderline.md#optional-productid)
* [productVariantId](assetorderline.md#optional-productvariantid)
* [provisioningContext](assetorderline.md#optional-provisioningcontext)
* [quantity](assetorderline.md#optional-quantity)
* [requiresInventoryCheck](assetorderline.md#optional-requiresinventorycheck)
* [resellerPriceType](assetorderline.md#optional-resellerpricetype)
* [resellerPriceTypeValue](assetorderline.md#optional-resellerpricetypevalue)
* [scope](assetorderline.md#optional-scope)
* [skuId](assetorderline.md#optional-skuid)
* [subscriptionId](assetorderline.md#optional-subscriptionid)
* [termDuration](assetorderline.md#optional-termduration)
* [type](assetorderline.md#optional-type)

## Properties

### `Optional` armRegionName

• **armRegionName**? : *string*

**`type`** {string}

**`memberof`** AssetOrderLine

___

### `Optional` billingCycle

• **billingCycle**? : *[BillingCycleEnum](../enums/assetorderline.billingcycleenum.md)*

**`type`** {string}

**`memberof`** AssetOrderLine

___

### `Optional` catalogItemId

• **catalogItemId**? : *string*

**`type`** {string}

**`memberof`** AssetOrderLine

___

### `Optional` errors

• **errors**? : *Array‹[AssetOrderLineError](../interfaces/assetorderlineerror.md)›*

**`type`** {Array&lt;AssetOrderLineError&gt;}

**`memberof`** AssetOrderLine

___

### `Optional` productId

• **productId**? : *string*

**`type`** {string}

**`memberof`** AssetOrderLine

___

### `Optional` productVariantId

• **productVariantId**? : *number*

**`type`** {number}

**`memberof`** AssetOrderLine

___

### `Optional` provisioningContext

• **provisioningContext**? : *object*

**`type`** {{ [key: string]: string; }}

**`memberof`** AssetOrderLine

#### Type declaration:

* \[ **key**: *string*\]: string

___

### `Optional` quantity

• **quantity**? : *number*

**`type`** {number}

**`memberof`** AssetOrderLine

___

### `Optional` requiresInventoryCheck

• **requiresInventoryCheck**? : *boolean*

**`type`** {boolean}

**`memberof`** AssetOrderLine

___

### `Optional` resellerPriceType

• **resellerPriceType**? : *[ResellerPriceTypeEnum](../enums/assetorderline.resellerpricetypeenum.md)*

**`type`** {string}

**`memberof`** AssetOrderLine

___

### `Optional` resellerPriceTypeValue

• **resellerPriceTypeValue**? : *number*

**`type`** {number}

**`memberof`** AssetOrderLine

___

### `Optional` scope

• **scope**? : *[ScopeEnum](../enums/assetorderline.scopeenum.md)*

**`type`** {string}

**`memberof`** AssetOrderLine

___

### `Optional` skuId

• **skuId**? : *string*

**`type`** {string}

**`memberof`** AssetOrderLine

___

### `Optional` subscriptionId

• **subscriptionId**? : *number*

**`type`** {number}

**`memberof`** AssetOrderLine

___

### `Optional` termDuration

• **termDuration**? : *string*

**`type`** {string}

**`memberof`** AssetOrderLine

___

### `Optional` type

• **type**? : *[TypeEnum](../enums/assetorderline.typeenum.md)*

**`type`** {string}

**`memberof`** AssetOrderLine
