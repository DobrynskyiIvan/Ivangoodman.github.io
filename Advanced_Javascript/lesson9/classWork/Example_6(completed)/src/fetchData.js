export default function fetchData() {
  return new Promise(resolve => {
    setTimeout(() => resolve({ name: "Tim", status: "active" }), 1500);
  });
}
