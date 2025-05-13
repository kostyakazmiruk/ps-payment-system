"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePaymentMethodCommand = void 0;
var CreatePaymentMethodCommand = /** @class */ (function () {
    function CreatePaymentMethodCommand(userId, type, cardNumber, expiryMonth, expiryYear, cardholderName, bankName, accountNumber, routingNumber, isDefault) {
        if (isDefault === void 0) { isDefault = false; }
        this.userId = userId;
        this.type = type;
        this.cardNumber = cardNumber;
        this.expiryMonth = expiryMonth;
        this.expiryYear = expiryYear;
        this.cardholderName = cardholderName;
        this.bankName = bankName;
        this.accountNumber = accountNumber;
        this.routingNumber = routingNumber;
        this.isDefault = isDefault;
    }
    return CreatePaymentMethodCommand;
}());
exports.CreatePaymentMethodCommand = CreatePaymentMethodCommand;
