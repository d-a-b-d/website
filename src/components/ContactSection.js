export default function ContactSection() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-20">
      <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
      <p>
        Email:{" "}
        <a href="mailto:you@example.com" className="underline">
          you@example.com
        </a>
      </p>
      <p>
        GitHub:{" "}
        <a href="https://github.com/yourusername" className="underline">
          yourusername
        </a>
      </p>
    </div>
  );
}
