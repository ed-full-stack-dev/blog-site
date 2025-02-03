export function generateTicketNumber(): string {
    const randomTicketNumber = Math.floor(Math.random() * 16777215).toString(16);
    return `#${randomTicketNumber.padStart(6, '0')}`;
}