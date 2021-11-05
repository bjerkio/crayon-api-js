[@bjerkio/crayon-api](../README.md) / [Exports](../modules.md) / AssetOrderLine

# Interface: AssetOrderLine

**`export`**

**`interface`** AssetOrderLine

## Table of contents

### Properties

- [armRegionName](AssetOrderLine.md#armregionname)
- [billingCycle](AssetOrderLine.md#billingcycle)
- [catalogItemId](AssetOrderLine.md#catalogitemid)
- [errors](AssetOrderLine.md#errors)
- [isTrial](AssetOrderLine.md#istrial)
- [productId](AssetOrderLine.md#productid)
- [productVariantId](AssetOrderLine.md#productvariantid)
- [provisioningContext](AssetOrderLine.md#provisioningcontext)
- [quantity](AssetOrderLine.md#quantity)
- [requiresInventoryCheck](AssetOrderLine.md#requiresinventorycheck)
- [resellerPriceType](AssetOrderLine.md#resellerpricetype)
- [resellerPriceTypeValue](AssetOrderLine.md#resellerpricetypevalue)
- [scope](AssetOrderLine.md#scope)
- [skuId](AssetOrderLine.md#skuid)
- [subscriptionId](AssetOrderLine.md#subscriptionid)
- [tags](AssetOrderLine.md#tags)
- [termDuration](AssetOrderLine.md#termduration)
- [type](AssetOrderLine.md#type)

## Properties

### armRegionName

• `Optional` **armRegionName**: `string`

**`memberof`** AssetOrderLine

#### Defined in

[src/models/AssetOrderLine.ts:66](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/models/AssetOrderLine.ts#L66)

___

### billingCycle

• `Optional` **billingCycle**: [`BillingCycleType`](../enums/BillingCycleType.md)

**`memberof`** AssetOrderLine

#### Defined in

[src/models/AssetOrderLine.ts:90](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/models/AssetOrderLine.ts#L90)

___

### catalogItemId

• `Optional` **catalogItemId**: `string`

**`memberof`** AssetOrderLine

#### Defined in

[src/models/AssetOrderLine.ts:114](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/models/AssetOrderLine.ts#L114)

___

### errors

• `Optional` **errors**: [`AssetOrderLineError`](AssetOrderLineError.md)[]

**`memberof`** AssetOrderLine

#### Defined in

[src/models/AssetOrderLine.ts:156](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/models/AssetOrderLine.ts#L156)

___

### isTrial

• `Optional` **isTrial**: `boolean`

**`memberof`** AssetOrderLine

#### Defined in

[src/models/AssetOrderLine.ts:144](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/models/AssetOrderLine.ts#L144)

___

### productId

• `Optional` **productId**: `string`

**`memberof`** AssetOrderLine

#### Defined in

[src/models/AssetOrderLine.ts:54](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/models/AssetOrderLine.ts#L54)

___

### productVariantId

• `Optional` **productVariantId**: `number`

**`memberof`** AssetOrderLine

#### Defined in

[src/models/AssetOrderLine.ts:78](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/models/AssetOrderLine.ts#L78)

___

### provisioningContext

• `Optional` **provisioningContext**: `Object`

**`memberof`** AssetOrderLine

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

[src/models/AssetOrderLine.ts:96](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/models/AssetOrderLine.ts#L96)

___

### quantity

• `Optional` **quantity**: `number`

**`memberof`** AssetOrderLine

#### Defined in

[src/models/AssetOrderLine.ts:84](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/models/AssetOrderLine.ts#L84)

___

### requiresInventoryCheck

• `Optional` **requiresInventoryCheck**: `boolean`

**`memberof`** AssetOrderLine

#### Defined in

[src/models/AssetOrderLine.ts:108](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/models/AssetOrderLine.ts#L108)

___

### resellerPriceType

• `Optional` **resellerPriceType**: [`SalesPriceType`](../enums/SalesPriceType.md)

**`memberof`** AssetOrderLine

#### Defined in

[src/models/AssetOrderLine.ts:132](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/models/AssetOrderLine.ts#L132)

___

### resellerPriceTypeValue

• `Optional` **resellerPriceTypeValue**: `number`

**`memberof`** AssetOrderLine

#### Defined in

[src/models/AssetOrderLine.ts:138](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/models/AssetOrderLine.ts#L138)

___

### scope

• `Optional` **scope**: [`AssetScope`](../enums/AssetScope.md)

**`memberof`** AssetOrderLine

#### Defined in

[src/models/AssetOrderLine.ts:126](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/models/AssetOrderLine.ts#L126)

___

### skuId

• `Optional` **skuId**: `string`

**`memberof`** AssetOrderLine

#### Defined in

[src/models/AssetOrderLine.ts:72](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/models/AssetOrderLine.ts#L72)

___

### subscriptionId

• `Optional` **subscriptionId**: `number`

**`memberof`** AssetOrderLine

#### Defined in

[src/models/AssetOrderLine.ts:60](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/models/AssetOrderLine.ts#L60)

___

### tags

• `Optional` **tags**: [`AssetTags`](AssetTags.md)

**`memberof`** AssetOrderLine

#### Defined in

[src/models/AssetOrderLine.ts:150](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/models/AssetOrderLine.ts#L150)

___

### termDuration

• `Optional` **termDuration**: `string`

**`memberof`** AssetOrderLine

#### Defined in

[src/models/AssetOrderLine.ts:120](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/models/AssetOrderLine.ts#L120)

___

### type

• `Optional` **type**: [`AssetType`](../enums/AssetType.md)

**`memberof`** AssetOrderLine

#### Defined in

[src/models/AssetOrderLine.ts:102](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/models/AssetOrderLine.ts#L102)
