export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm text-muted-foreground">
          Designed & built by Ángel Salazar — {new Date().getFullYear()}
        </p>
        <p className="text-xs text-muted-foreground mt-2">
          Built with Next.js, TypeScript & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
