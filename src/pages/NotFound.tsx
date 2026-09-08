import Layout from '../components/layout/Layout';
import { Button } from '../components/common/Button';

export default function NotFound() {
  return (
    <Layout>
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-7xl font-extrabold text-corporate-blue mb-4">404</h1>
        <h2 className="text-3xl font-bold text-corporate-navy mb-6">Page Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Button asLink to="/" variant="primary">
          Back to Home
        </Button>
      </div>
    </Layout>
  );
}
