"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePaymentMethodDto = void 0;
var class_validator_1 = require("class-validator");
var payment_method_entity_1 = require("../../domain/entities/payment-method.entity");
var CreatePaymentMethodDto = function () {
    var _a;
    var _userId_decorators;
    var _userId_initializers = [];
    var _userId_extraInitializers = [];
    var _type_decorators;
    var _type_initializers = [];
    var _type_extraInitializers = [];
    var _cardNumber_decorators;
    var _cardNumber_initializers = [];
    var _cardNumber_extraInitializers = [];
    var _expiryMonth_decorators;
    var _expiryMonth_initializers = [];
    var _expiryMonth_extraInitializers = [];
    var _expiryYear_decorators;
    var _expiryYear_initializers = [];
    var _expiryYear_extraInitializers = [];
    var _cardholderName_decorators;
    var _cardholderName_initializers = [];
    var _cardholderName_extraInitializers = [];
    var _bankName_decorators;
    var _bankName_initializers = [];
    var _bankName_extraInitializers = [];
    var _accountNumber_decorators;
    var _accountNumber_initializers = [];
    var _accountNumber_extraInitializers = [];
    var _routingNumber_decorators;
    var _routingNumber_initializers = [];
    var _routingNumber_extraInitializers = [];
    var _isDefault_decorators;
    var _isDefault_initializers = [];
    var _isDefault_extraInitializers = [];
    return _a = /** @class */ (function () {
            function CreatePaymentMethodDto() {
                this.userId = __runInitializers(this, _userId_initializers, void 0);
                this.type = (__runInitializers(this, _userId_extraInitializers), __runInitializers(this, _type_initializers, void 0));
                this.cardNumber = (__runInitializers(this, _type_extraInitializers), __runInitializers(this, _cardNumber_initializers, void 0));
                this.expiryMonth = (__runInitializers(this, _cardNumber_extraInitializers), __runInitializers(this, _expiryMonth_initializers, void 0));
                this.expiryYear = (__runInitializers(this, _expiryMonth_extraInitializers), __runInitializers(this, _expiryYear_initializers, void 0));
                this.cardholderName = (__runInitializers(this, _expiryYear_extraInitializers), __runInitializers(this, _cardholderName_initializers, void 0));
                this.bankName = (__runInitializers(this, _cardholderName_extraInitializers), __runInitializers(this, _bankName_initializers, void 0));
                this.accountNumber = (__runInitializers(this, _bankName_extraInitializers), __runInitializers(this, _accountNumber_initializers, void 0));
                this.routingNumber = (__runInitializers(this, _accountNumber_extraInitializers), __runInitializers(this, _routingNumber_initializers, void 0));
                this.isDefault = (__runInitializers(this, _routingNumber_extraInitializers), __runInitializers(this, _isDefault_initializers, void 0));
                __runInitializers(this, _isDefault_extraInitializers);
            }
            return CreatePaymentMethodDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _userId_decorators = [(0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.IsString)()];
            _type_decorators = [(0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.IsEnum)(payment_method_entity_1.PaymentMethodType)];
            _cardNumber_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _expiryMonth_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsNumber)(), (0, class_validator_1.Min)(1), (0, class_validator_1.Max)(12)];
            _expiryYear_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsNumber)()];
            _cardholderName_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _bankName_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _accountNumber_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _routingNumber_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _isDefault_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsBoolean)()];
            __esDecorate(null, null, _userId_decorators, { kind: "field", name: "userId", static: false, private: false, access: { has: function (obj) { return "userId" in obj; }, get: function (obj) { return obj.userId; }, set: function (obj, value) { obj.userId = value; } }, metadata: _metadata }, _userId_initializers, _userId_extraInitializers);
            __esDecorate(null, null, _type_decorators, { kind: "field", name: "type", static: false, private: false, access: { has: function (obj) { return "type" in obj; }, get: function (obj) { return obj.type; }, set: function (obj, value) { obj.type = value; } }, metadata: _metadata }, _type_initializers, _type_extraInitializers);
            __esDecorate(null, null, _cardNumber_decorators, { kind: "field", name: "cardNumber", static: false, private: false, access: { has: function (obj) { return "cardNumber" in obj; }, get: function (obj) { return obj.cardNumber; }, set: function (obj, value) { obj.cardNumber = value; } }, metadata: _metadata }, _cardNumber_initializers, _cardNumber_extraInitializers);
            __esDecorate(null, null, _expiryMonth_decorators, { kind: "field", name: "expiryMonth", static: false, private: false, access: { has: function (obj) { return "expiryMonth" in obj; }, get: function (obj) { return obj.expiryMonth; }, set: function (obj, value) { obj.expiryMonth = value; } }, metadata: _metadata }, _expiryMonth_initializers, _expiryMonth_extraInitializers);
            __esDecorate(null, null, _expiryYear_decorators, { kind: "field", name: "expiryYear", static: false, private: false, access: { has: function (obj) { return "expiryYear" in obj; }, get: function (obj) { return obj.expiryYear; }, set: function (obj, value) { obj.expiryYear = value; } }, metadata: _metadata }, _expiryYear_initializers, _expiryYear_extraInitializers);
            __esDecorate(null, null, _cardholderName_decorators, { kind: "field", name: "cardholderName", static: false, private: false, access: { has: function (obj) { return "cardholderName" in obj; }, get: function (obj) { return obj.cardholderName; }, set: function (obj, value) { obj.cardholderName = value; } }, metadata: _metadata }, _cardholderName_initializers, _cardholderName_extraInitializers);
            __esDecorate(null, null, _bankName_decorators, { kind: "field", name: "bankName", static: false, private: false, access: { has: function (obj) { return "bankName" in obj; }, get: function (obj) { return obj.bankName; }, set: function (obj, value) { obj.bankName = value; } }, metadata: _metadata }, _bankName_initializers, _bankName_extraInitializers);
            __esDecorate(null, null, _accountNumber_decorators, { kind: "field", name: "accountNumber", static: false, private: false, access: { has: function (obj) { return "accountNumber" in obj; }, get: function (obj) { return obj.accountNumber; }, set: function (obj, value) { obj.accountNumber = value; } }, metadata: _metadata }, _accountNumber_initializers, _accountNumber_extraInitializers);
            __esDecorate(null, null, _routingNumber_decorators, { kind: "field", name: "routingNumber", static: false, private: false, access: { has: function (obj) { return "routingNumber" in obj; }, get: function (obj) { return obj.routingNumber; }, set: function (obj, value) { obj.routingNumber = value; } }, metadata: _metadata }, _routingNumber_initializers, _routingNumber_extraInitializers);
            __esDecorate(null, null, _isDefault_decorators, { kind: "field", name: "isDefault", static: false, private: false, access: { has: function (obj) { return "isDefault" in obj; }, get: function (obj) { return obj.isDefault; }, set: function (obj, value) { obj.isDefault = value; } }, metadata: _metadata }, _isDefault_initializers, _isDefault_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.CreatePaymentMethodDto = CreatePaymentMethodDto;
