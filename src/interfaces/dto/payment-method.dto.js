"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentMethodDto = void 0;
var PaymentMethodDto = /** @class */ (function () {
    function PaymentMethodDto() {
    }
    // Note: We don't include sensitive data like full card numbers
    PaymentMethodDto.fromEntity = function (entity) {
        var dto = new PaymentMethodDto();
        dto.id = entity.id;
        dto.userId = entity.userId;
        dto.type = entity.type;
        dto.last4 = entity.last4;
        dto.expiryMonth = entity.expiryMonth;
        dto.expiryYear = entity.expiryYear;
        dto.cardholderName = entity.cardholderName;
        dto.bankName = entity.bankName;
        dto.isDefault = entity.isDefault;
        dto.createdAt = entity.createdAt;
        return dto;
    };
    return PaymentMethodDto;
}());
exports.PaymentMethodDto = PaymentMethodDto;
