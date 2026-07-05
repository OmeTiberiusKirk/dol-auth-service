import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class BigIntInterceptor implements NestInterceptor {
  intercept(_: ExecutionContext, next: CallHandler): Observable<unknown> {
    return next.handle().pipe(map((data) => this.serialize(data)));
  }

  private serialize(obj: unknown): unknown {
    if (obj === null || obj === undefined) return obj;

    // ถ้าเจอ BigInt ให้แปลงเป็น String (หรือ Number ถ้ามั่นใจว่าเลขไม่เกิน 2^53 - 1)
    if (typeof obj === 'bigint') {
      return obj.toString();
    }

    // ถ้าเป็น Array ให้ไล่แปลงสมาชิกทุกตัว
    if (Array.isArray(obj)) {
      return obj.map((item) => this.serialize(item));
    }

    // ถ้าเป็น Object ให้ไล่แปลงทุก Property
    if (typeof obj === 'object') {
      return Object.fromEntries(
        Object.entries(obj).map(([key, value]) => [key, this.serialize(value)]),
      );
    }

    return obj;
  }
}
