"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentProcessedEvent = void 0;
var PaymentProcessedEvent = /** @class */ (function () {
    function PaymentProcessedEvent(transactionId, paymentMethodId, amount, success, processorResponse, error) {
        this.transactionId = transactionId;
        this.paymentMethodId = paymentMethodId;
        this.amount = amount;
        this.success = success;
        this.processorResponse = processorResponse;
        this.error = error;
    }
    return PaymentProcessedEvent;
}());
exports.PaymentProcessedEvent = PaymentProcessedEvent;
