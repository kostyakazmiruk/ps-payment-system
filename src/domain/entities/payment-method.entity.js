"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentMethod = exports.PaymentMethodType = void 0;
var PaymentMethodType;
(function (PaymentMethodType) {
    PaymentMethodType["CREDIT_CARD"] = "CREDIT_CARD";
    PaymentMethodType["BANK_ACCOUNT"] = "BANK_ACCOUNT";
})(PaymentMethodType || (exports.PaymentMethodType = PaymentMethodType = {}));
var PaymentMethod = /** @class */ (function () {
    function PaymentMethod() {
    }
    PaymentMethod.prototype.isValid = function () {
        if (this.type === PaymentMethodType.CREDIT_CARD) {
            return !!this.cardNumber && !!this.expiryMonth && !!this.expiryYear;
        }
        else if (this.type === PaymentMethodType.BANK_ACCOUNT) {
            return !!this.accountNumber && !!this.routingNumber;
        }
        return false;
    };
    // Returns a masked version of the card number or account number
    PaymentMethod.prototype.getMaskedNumber = function () {
        if (this.type === PaymentMethodType.CREDIT_CARD && this.cardNumber) {
            return "**** **** **** ".concat(this.last4 || this.cardNumber.slice(-4));
        }
        else if (this.type === PaymentMethodType.BANK_ACCOUNT &&
            this.accountNumber) {
            return "****".concat(this.accountNumber.slice(-4));
        }
        return '';
    };
    return PaymentMethod;
}());
exports.PaymentMethod = PaymentMethod;
