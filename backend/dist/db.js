"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const prisma_paid_1 = require("./generated/prisma-paid");
const globalForPrisma = global;
exports.prisma = globalForPrisma.prisma ||
    new prisma_paid_1.PrismaClient({
        log: process.env.PRISMA_QUERY_LOG === 'true' ? ['query', 'info', 'warn', 'error'] : ['warn', 'error'],
    });
if (process.env.NODE_ENV !== 'production')
    globalForPrisma.prisma = exports.prisma;
