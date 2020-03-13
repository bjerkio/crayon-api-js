[@bjerkio/crayon-api - v0.0.0](../README.md) › [ProductContainer](productcontainer.md)

# Module: ProductContainer

**`export`** 

**`namespace`** ProductContainer

## Index

### Enumerations

* [CategoryEnum](../enums/productcontainer.categoryenum.md)
* [TypeEnum](../enums/productcontainer.typeenum.md)

### Properties

* [activeDraft](productcontainer.md#optional-activedraft)
* [axContactUserId](productcontainer.md#optional-axcontactuserid)
* [category](productcontainer.md#optional-category)
* [comments](productcontainer.md#optional-comments)
* [contactUser](productcontainer.md#optional-contactuser)
* [createdByUserId](productcontainer.md#optional-createdbyuserid)
* [createdDate](productcontainer.md#optional-createddate)
* [deliveryAddress](productcontainer.md#optional-deliveryaddress)
* [id](productcontainer.md#optional-id)
* [invoiceAddress](productcontainer.md#optional-invoiceaddress)
* [invoiceProfile](productcontainer.md#optional-invoiceprofile)
* [invoiceReference](productcontainer.md#optional-invoicereference)
* [issues](productcontainer.md#optional-issues)
* [name](productcontainer.md#optional-name)
* [note](productcontainer.md#optional-note)
* [orderListId](productcontainer.md#optional-orderlistid)
* [orderReference](productcontainer.md#optional-orderreference)
* [orderStatusChangedDate](productcontainer.md#optional-orderstatuschangeddate)
* [organization](productcontainer.md#optional-organization)
* [productRows](productcontainer.md#optional-productrows)
* [program](productcontainer.md#optional-program)
* [publisher](productcontainer.md#optional-publisher)
* [quoteValidToDate](productcontainer.md#optional-quotevalidtodate)
* [removed](productcontainer.md#optional-removed)
* [requisition](productcontainer.md#optional-requisition)
* [sent](productcontainer.md#optional-sent)
* [submittedBy](productcontainer.md#optional-submittedby)
* [totalAlternativeSalesPrice](productcontainer.md#optional-totalalternativesalesprice)
* [totalSalesPrice](productcontainer.md#optional-totalsalesprice)
* [type](productcontainer.md#optional-type)
* [usageMonth](productcontainer.md#optional-usagemonth)

## Properties

### `Optional` activeDraft

• **activeDraft**? : *boolean*

**`type`** {boolean}

**`memberof`** ProductContainer

___

### `Optional` axContactUserId

• **axContactUserId**? : *string*

**`type`** {string}

**`memberof`** ProductContainer

___

### `Optional` category

• **category**? : *[CategoryEnum](../enums/productcontainer.categoryenum.md)*

**`type`** {string}

**`memberof`** ProductContainer

___

### `Optional` comments

• **comments**? : *Array‹[ProductContainerComment](productcontainercomment.md)›*

**`type`** {Array&lt;ProductContainerComment&gt;}

**`memberof`** ProductContainer

___

### `Optional` contactUser

• **contactUser**? : *[UserProfile](../interfaces/userprofile.md)*

**`type`** {UserProfile}

**`memberof`** ProductContainer

___

### `Optional` createdByUserId

• **createdByUserId**? : *string*

**`type`** {string}

**`memberof`** ProductContainer

___

### `Optional` createdDate

• **createdDate**? : *Date*

**`type`** {Date}

**`memberof`** ProductContainer

___

### `Optional` deliveryAddress

• **deliveryAddress**? : *[AddressData](../interfaces/addressdata.md)*

**`type`** {AddressData}

**`memberof`** ProductContainer

___

### `Optional` id

• **id**? : *number*

**`type`** {number}

**`memberof`** ProductContainer

___

### `Optional` invoiceAddress

• **invoiceAddress**? : *[AddressData](../interfaces/addressdata.md)*

**`type`** {AddressData}

**`memberof`** ProductContainer

___

### `Optional` invoiceProfile

• **invoiceProfile**? : *[InvoiceProfile](../interfaces/invoiceprofile.md)*

**`type`** {InvoiceProfile}

**`memberof`** ProductContainer

___

### `Optional` invoiceReference

• **invoiceReference**? : *string*

**`type`** {string}

**`memberof`** ProductContainer

___

### `Optional` issues

• **issues**? : *Array‹[ProductContainerIssue](../interfaces/productcontainerissue.md)›*

**`type`** {Array&lt;ProductContainerIssue&gt;}

**`memberof`** ProductContainer

___

### `Optional` name

• **name**? : *string*

**`type`** {string}

**`memberof`** ProductContainer

___

### `Optional` note

• **note**? : *string*

**`type`** {string}

**`memberof`** ProductContainer

___

### `Optional` orderListId

• **orderListId**? : *number*

**`type`** {number}

**`memberof`** ProductContainer

___

### `Optional` orderReference

• **orderReference**? : *string*

**`type`** {string}

**`memberof`** ProductContainer

___

### `Optional` orderStatusChangedDate

• **orderStatusChangedDate**? : *Date*

**`type`** {Date}

**`memberof`** ProductContainer

___

### `Optional` organization

• **organization**? : *[ObjectReference](../interfaces/objectreference.md)*

**`type`** {ObjectReference}

**`memberof`** ProductContainer

___

### `Optional` productRows

• **productRows**? : *Array‹[ProductRow](productrow.md)›*

**`type`** {Array&lt;ProductRow&gt;}

**`memberof`** ProductContainer

___

### `Optional` program

• **program**? : *[Program](../interfaces/program.md)*

**`type`** {Program}

**`memberof`** ProductContainer

___

### `Optional` publisher

• **publisher**? : *[ObjectReference](../interfaces/objectreference.md)*

**`type`** {ObjectReference}

**`memberof`** ProductContainer

___

### `Optional` quoteValidToDate

• **quoteValidToDate**? : *Date*

**`type`** {Date}

**`memberof`** ProductContainer

___

### `Optional` removed

• **removed**? : *boolean*

**`type`** {boolean}

**`memberof`** ProductContainer

___

### `Optional` requisition

• **requisition**? : *string*

**`type`** {string}

**`memberof`** ProductContainer

___

### `Optional` sent

• **sent**? : *Date*

**`type`** {Date}

**`memberof`** ProductContainer

___

### `Optional` submittedBy

• **submittedBy**? : *[ProductContainerCommentUser](../interfaces/productcontainercommentuser.md)*

**`type`** {ProductContainerCommentUser}

**`memberof`** ProductContainer

___

### `Optional` totalAlternativeSalesPrice

• **totalAlternativeSalesPrice**? : *Array‹[Price](../interfaces/price.md)›*

**`type`** {Array&lt;Price&gt;}

**`memberof`** ProductContainer

___

### `Optional` totalSalesPrice

• **totalSalesPrice**? : *Array‹[Price](../interfaces/price.md)›*

**`type`** {Array&lt;Price&gt;}

**`memberof`** ProductContainer

___

### `Optional` type

• **type**? : *[TypeEnum](../enums/productcontainer.typeenum.md)*

**`type`** {string}

**`memberof`** ProductContainer

___

### `Optional` usageMonth

• **usageMonth**? : *Date*

**`type`** {Date}

**`memberof`** ProductContainer
