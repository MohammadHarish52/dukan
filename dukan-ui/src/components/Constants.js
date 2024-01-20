export const ordersArray = [
  {
    orderId: "#281209",
    status: "paid",
    transactionId: "131634495749",
    refundDate: "12 July, 8:45 PM",
    orderAmount: "₹1,125",
  },
  {
    orderId: "#281210",
    status: "unpaid",
    transactionId: "131634495750",
    refundDate: "3 Feb, 9:00 PM",
    orderAmount: "₹950",
  },
  {
    orderId: "#281211",
    status: "paid",
    transactionId: "131634495751",
    refundDate: "Tomorrow, 10:30 AM",
    orderAmount: "₹2,300",
  },
  {
    orderId: "#281212",
    status: "unpaid",
    transactionId: "131634495752",
    refundDate: "Tomorrow, 11:45 AM",
    orderAmount: "₹780",
  },
  {
    orderId: "#281213",
    status: "paid",
    transactionId: "131634495753",
    refundDate: "Tomorrow, 2:15 PM",
    orderAmount: "₹1,890",
  },
  {
    orderId: "#281214",
    status: "unpaid",
    transactionId: "131634495754",
    refundDate: "Tomorrow, 4:30 PM",
    orderAmount: "₹1,450",
  },
];

const paymentsArray = [
  {
    status: "Next Payout",
    amount: "₹2312.23",
    numberOfOrders: "23 orders",
    nextPaymentDate: "Today, 4:00 PM",
  },
  {
    status: " Amount Pending",
    amount: "₹92,312.20", // You can set it to the actual pending amount
    numberOfOrders: "13 orders",
  },
  {
    status: " Amount Processed",
    amount: "₹23,92,312.19",
    numberOfOrders: "",
  },
];

export default paymentsArray;

// Example usage:
console.log(ordersArray);
