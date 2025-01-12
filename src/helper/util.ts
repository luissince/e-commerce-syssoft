import React from "react";

/**
 * Pausa la ejecución por un tiempo especificado.
 *
 * @param {number} time - Tiempo de espera en milisegundos.
 * @returns {Promise<void>} Una promesa que se resuelve después del tiempo de espera.
 */
export function sleep(time: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, time));
}

/**
 * Formatea un número como una cantidad de dinero con opciones personalizables.
 *
 * @param {number|string} amount - La cantidad numérica que se va a formatear como dinero.
 * @param {number} [decimalCount=2] - El número de decimales a mostrar.
 * @param {string} [decimal='.'] - El separador decimal.
 * @param {string} [thousands=','] - El separador de miles.
 * @returns {string} La cantidad formateada como dinero.
 */
export function formatDecimal(
  amount: number | string,
  decimalCount: number = 2,
  decimal: string = '.',
  thousands: string = ','
): string {
  const isNumber = /^-?\d*\.?\d+$/.test(String(amount));
  if (!isNumber) return '0.00';

  decimalCount = Number.isInteger(decimalCount) ? Math.abs(decimalCount) : 2;

  const number = Number(amount);
  const negativeSign = number < 0 ? '-' : '';

  const roundedAmount = Math.abs(Number(rounded(number, decimalCount))).toFixed(decimalCount);
  const [integerPart, decimalPart] = roundedAmount.split('.');

  const integerFormatted = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, thousands);
  const decimalFormatted = decimalCount ? decimal + (decimalPart || '0'.repeat(decimalCount)) : '';

  return negativeSign + integerFormatted + decimalFormatted;
}

/**
 * Redondea un número a un número específico de decimales.
 *
 * @param {number|string} amount - La cantidad numérica que se va a redondear.
 * @param {number} [decimalCount=2] - El número de decimales a mostrar.
 * @returns {number} La cantidad redondeada.
 */
export function rounded(amount: number | string, decimalCount: number = 2): string {
  const isNumber = /^-?\d*\.?\d+$/.test(String(amount));
  if (!isNumber) return '0';

  const number = Number(amount);

  const negativeSign = number < 0 ? '-' : '';

  const parsedAmount = Math.abs(number);
  const fixedAmount = parsedAmount.toFixed(decimalCount);

  return negativeSign + fixedAmount;
}

/**
 * Formatea un número como una cantidad de dinero en la moneda especificada.
 *
 * @param {number} value - El valor numérico que se va a formatear como dinero.
 * @param {string} [currency="PEN"] - El código de moneda (por ejemplo, "PEN" para soles peruanos).
 * @returns {string} La cantidad formateada como dinero en la moneda especificada.
 */
export const numberFormat = (value: number, currency: string = 'PEN'): string => {
  // Definir formatos para diferentes monedas
  const formats = [
    {
      locales: 'es-PE',
      options: {
        style: 'currency',
        currency: 'PEN',
        minimumFractionDigits: 2,
      },
    },
    {
      locales: 'en-US',
      options: {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
      },
    },
    {
      locales: 'de-DE',
      options: {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 2,
      },
    },
  ];

  // Buscar el formato correspondiente a la moneda especificada
  const newFormat = formats.find((item) => currency === item.options.currency);

  if (newFormat) {
    // Crear un formateador de números con el formato encontrado
    const formatter = new Intl.NumberFormat(newFormat.locales, {
      style: 'currency',
      currency: newFormat.options.currency,
      minimumFractionDigits: newFormat.options.minimumFractionDigits
    });

    // Formatear el valor y devolverlo
    const formattedValue = formatter.format(value);

    // Elimina todos los espacios en blanco
    return formattedValue.replace(/\s/g, '');
  } else {
    // Si no se encuentra un formato válido, devolver "0"
    return 'MN ' + formatDecimal(String(value));
  }
};

export function isEmpty(object: any) {
  const isBrowser = typeof window !== 'undefined';

  if (object === null || typeof object === 'undefined') {
    return true;
  }

  if (Array.isArray(object) || ( isBrowser && object instanceof FileList)) {
    return object.length === 0;
  }

  if (typeof object === 'string') {
    return object.trim() === '';
  }

  if (typeof object === 'object') {
    return Object.keys(object).length === 0;
  }

  return false;
}

export function isEmail(email: string) {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}

export function keyNumberFloat(event: React.KeyboardEvent<HTMLInputElement>, enterCallback: () => void): void {
  const key: string = event.key;
  const isDigit: boolean = /\d/.test(key);
  const isDot: boolean = key === '.';
  const input = event.target as HTMLInputElement;
  const hasDot = input.value.includes('.');

  if (!(isDigit || isDot || key === 'Backspace' || key === 'Delete' || key === 'ArrowLeft' || key === 'ArrowRight' || key === 'Tab' || (event.ctrlKey || event.metaKey) && key === 'c' || (event.ctrlKey || event.metaKey) && key === 'v')) {
    event.preventDefault();
  }

  if (isDot && hasDot) {
    event.preventDefault();
  }

  // Permitir solo un punto al principio del número
  if (input.selectionStart === 0 && isDot) {
    event.preventDefault();
  }

  // Ejecutar el callback si la tecla presionada es "Enter"
  if (key === "Enter" && typeof enterCallback === "function") {
    enterCallback();
  }
}

export function keyNumberInteger(event: React.KeyboardEvent<HTMLInputElement>, enterCallback: () => void) {
  const key = event.key;
  const isDigit = /\d/.test(key);

  if (!(isDigit || key === 'Backspace' || key === 'Delete' || key === 'ArrowLeft' || key === 'ArrowRight' || key === 'Tab' || (event.ctrlKey || event.metaKey) && key === 'c' || (event.ctrlKey || event.metaKey) && key === 'v')) {
    event.preventDefault();
  }

  // Ejecutar el callback si la tecla presionada es "Enter"
  if (key === "Enter" && typeof enterCallback === "function") {
    enterCallback();
  }
}

export function keyNumberPhone(event: React.KeyboardEvent<HTMLInputElement>, enterCallback: () => void): void {
  const key = event.key;
  const inputValue = (event.target as HTMLInputElement).value;

  // Verifica si la tecla presionada es un dígito o uno de los caracteres permitidos
  const isDigitOrAllowedChar = /^[0-9+()-]$/.test(key);

  // Verifica si el carácter ya existe en el valor actual del campo
  const charAlreadyExists = inputValue.includes(key);

  if (key === '-' && charAlreadyExists) {
    event.preventDefault();
  }

  if (key === '+' && charAlreadyExists) {
    event.preventDefault();
  }

  if (!(isDigitOrAllowedChar || key === 'Backspace' || key === 'Delete' || key === 'ArrowLeft' || key === 'ArrowRight' || key === 'Tab' || (event.ctrlKey || event.metaKey) && key === 'c' || (event.ctrlKey || event.metaKey) && key === 'v')) {
    event.preventDefault();
  }

  // Ejecutar el callback si la tecla presionada es "Enter"
  if (key === "Enter" && typeof enterCallback === "function") {
    enterCallback();
  }
}

export function focusOnFirstInvalidButton(element: HTMLDivElement) {
  const buttos = Array.from(element.querySelectorAll('button'));

  if (isEmpty(buttos)) return;

  const button = buttos[0];
  button.focus();
}