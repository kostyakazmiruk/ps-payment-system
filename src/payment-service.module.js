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
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentModule = void 0;
var common_1 = require("@nestjs/common");
var config_1 = require("@nestjs/config");
var cqrs_1 = require("@nestjs/cqrs");
var microservices_1 = require("@nestjs/microservices");
var app_config_1 = require("./config/app.config");
// Command Handlers
var create_payment_method_handler_1 = require("./application/commands/create-payment-method.handler");
var process_payment_handler_1 = require("./application/commands/process-payment.handler");
// Query Handlers
var get_payment_method_handler_1 = require("./application/queries/get-payment-method.handler");
var get_payment_methods_handler_1 = require("./application/queries/get-payment-methods.handler");
// Event Handlers
var verify_payment_method_handler_1 = require("./infrastructure/messaging/event-handlers/verify-payment-method.handler");
// Controllers
var payment_method_controller_1 = require("./infrastructure/controllers/payment-method.controller");
// Repositories and Services
var prisma_service_1 = require("./infrastructure/database/prisma.service");
var payment_method_repository_1 = require("./infrastructure/database/repositories/payment-method.repository");
var CommandHandlers = [create_payment_method_handler_1.CreatePaymentMethodHandler, process_payment_handler_1.ProcessPaymentHandler];
var QueryHandlers = [get_payment_method_handler_1.GetPaymentMethodHandler, get_payment_methods_handler_1.GetPaymentMethodsHandler];
var EventHandlers = [verify_payment_method_handler_1.VerifyPaymentMethodHandler];
var PaymentModule = function () {
    var _classDecorators = [(0, common_1.Module)({
            imports: [
                config_1.ConfigModule.forRoot({
                    isGlobal: true,
                    load: [app_config_1.default],
                }),
                cqrs_1.CqrsModule,
                microservices_1.ClientsModule.registerAsync([
                    {
                        name: 'TRANSACTION_SERVICE',
                        useFactory: function (configService) { return ({
                            transport: microservices_1.Transport.RMQ,
                            options: {
                                urls: [
                                    configService.get('RABBIT_MQ_URI') ||
                                        'amqp://localhost:5672',
                                ],
                                queue: 'transaction_queue',
                                queueOptions: {
                                    durable: true,
                                },
                            },
                        }); },
                        inject: [config_1.ConfigService],
                    },
                ]),
            ],
            controllers: [payment_method_controller_1.PaymentMethodController],
            providers: __spreadArray(__spreadArray(__spreadArray([
                prisma_service_1.PrismaService,
                payment_method_repository_1.PaymentMethodRepository
            ], CommandHandlers, true), QueryHandlers, true), EventHandlers, true),
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var PaymentModule = _classThis = /** @class */ (function () {
        function PaymentModule_1() {
        }
        return PaymentModule_1;
    }());
    __setFunctionName(_classThis, "PaymentModule");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        PaymentModule = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return PaymentModule = _classThis;
}();
exports.PaymentModule = PaymentModule;
