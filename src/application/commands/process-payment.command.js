"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessPaymentCommand = void 0;
var ProcessPaymentCommand = /** @class */ (function () {
    function ProcessPaymentCommand(transactionId, paymentMethodId, amount, currency, description) {
        this.transactionId = transactionId;
        this.paymentMethodId = paymentMethodId;
        this.amount = amount;
        this.currency = currency;
        this.description = description;
    }
    return ProcessPaymentCommand;
}());
exports.ProcessPaymentCommand = ProcessPaymentCommand;
