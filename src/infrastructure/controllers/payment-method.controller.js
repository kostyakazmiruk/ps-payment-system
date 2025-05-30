"use strict";
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentMethodController = void 0;
var common_1 = require("@nestjs/common");
var microservices_1 = require("@nestjs/microservices");
var create_payment_method_command_1 = require("../../application/commands/create-payment-method.command");
var get_payment_method_handler_1 = require("../../application/queries/get-payment-method.handler");
var get_payment_methods_handler_1 = require("../../application/queries/get-payment-methods.handler");
var process_payment_command_1 = require("../../application/commands/process-payment.command");
var PaymentMethodController = function () {
    var _classDecorators = [(0, common_1.Controller)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _createPaymentMethod_decorators;
    var _getPaymentMethod_decorators;
    var _getPaymentMethods_decorators;
    var _deletePaymentMethod_decorators;
    var _processPayment_decorators;
    var PaymentMethodController = _classThis = /** @class */ (function () {
        function PaymentMethodController_1(commandBus, queryBus) {
            this.commandBus = (__runInitializers(this, _instanceExtraInitializers), commandBus);
            this.queryBus = queryBus;
        }
        PaymentMethodController_1.prototype.createPaymentMethod = function (data) {
            return __awaiter(this, void 0, void 0, function () {
                var command;
                return __generator(this, function (_a) {
                    command = new create_payment_method_command_1.CreatePaymentMethodCommand(data.userId, data.type, data.cardNumber, data.expiryMonth, data.expiryYear, data.cardholderName, data.bankName, data.accountNumber, data.routingNumber, data.isDefault || false);
                    return [2 /*return*/, this.commandBus.execute(command)];
                });
            });
        };
        PaymentMethodController_1.prototype.getPaymentMethod = function (data) {
            return __awaiter(this, void 0, void 0, function () {
                var query;
                return __generator(this, function (_a) {
                    query = new get_payment_method_handler_1.GetPaymentMethodQuery(data.id);
                    return [2 /*return*/, this.queryBus.execute(query)];
                });
            });
        };
        PaymentMethodController_1.prototype.getPaymentMethods = function (data) {
            return __awaiter(this, void 0, void 0, function () {
                var query;
                return __generator(this, function (_a) {
                    query = new get_payment_methods_handler_1.GetPaymentMethodsQuery(data.userId);
                    return [2 /*return*/, this.queryBus.execute(query)];
                });
            });
        };
        PaymentMethodController_1.prototype.deletePaymentMethod = function (data) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    // Implementation for deleting a payment method
                    // This would typically call a command handler
                    return [2 /*return*/, { deleted: true, id: data.id }];
                });
            });
        };
        PaymentMethodController_1.prototype.processPayment = function (data) {
            return __awaiter(this, void 0, void 0, function () {
                var command;
                return __generator(this, function (_a) {
                    command = new process_payment_command_1.ProcessPaymentCommand(data.transactionId, data.paymentMethodId, data.amount, data.currency, data.description);
                    return [2 /*return*/, this.commandBus.execute(command)];
                });
            });
        };
        return PaymentMethodController_1;
    }());
    __setFunctionName(_classThis, "PaymentMethodController");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _createPaymentMethod_decorators = [(0, microservices_1.MessagePattern)('create.payment.method')];
        _getPaymentMethod_decorators = [(0, microservices_1.MessagePattern)('get.payment.method')];
        _getPaymentMethods_decorators = [(0, microservices_1.MessagePattern)('get.payment.methods')];
        _deletePaymentMethod_decorators = [(0, microservices_1.MessagePattern)('delete.payment.method')];
        _processPayment_decorators = [(0, microservices_1.MessagePattern)('process.payment')];
        __esDecorate(_classThis, null, _createPaymentMethod_decorators, { kind: "method", name: "createPaymentMethod", static: false, private: false, access: { has: function (obj) { return "createPaymentMethod" in obj; }, get: function (obj) { return obj.createPaymentMethod; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getPaymentMethod_decorators, { kind: "method", name: "getPaymentMethod", static: false, private: false, access: { has: function (obj) { return "getPaymentMethod" in obj; }, get: function (obj) { return obj.getPaymentMethod; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getPaymentMethods_decorators, { kind: "method", name: "getPaymentMethods", static: false, private: false, access: { has: function (obj) { return "getPaymentMethods" in obj; }, get: function (obj) { return obj.getPaymentMethods; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _deletePaymentMethod_decorators, { kind: "method", name: "deletePaymentMethod", static: false, private: false, access: { has: function (obj) { return "deletePaymentMethod" in obj; }, get: function (obj) { return obj.deletePaymentMethod; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _processPayment_decorators, { kind: "method", name: "processPayment", static: false, private: false, access: { has: function (obj) { return "processPayment" in obj; }, get: function (obj) { return obj.processPayment; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        PaymentMethodController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return PaymentMethodController = _classThis;
}();
exports.PaymentMethodController = PaymentMethodController;
