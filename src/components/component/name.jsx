/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/DrlYSxdmlAS
 */
import { CardContent, Card } from "@/components/ui/card"

export function name() {
  return (
    <Card className="w-full max-w-xs">
      <CardContent className="p-6 flex-col items-center justify-center gap-2">
        <div className="flex items-center gap-2">
          <div className="rounded-full overflow-hidden w-12 h-12">
            <img
              alt="Company logo"
              className="aspect-square"
              height="48"
              src="/placeholder.svg"
              width="48" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-lg font-bold">Charlotte Pierce</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">Art Director</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <PhoneIcon className="w-4 h-4 flex-shrink-0" />
          <a className="text-sm font-medium underline" href="#">
            (555) 123-4567
          </a>
        </div>
        <div className="flex items-center gap-4">
          <MailIcon className="w-4 h-4 flex-shrink-0" />
          <a className="text-sm font-medium underline" href="#">
            example@example.com
          </a>
        </div>
      </CardContent>
    </Card>)
  ;
}


function PhoneIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>)
  );
}


function MailIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>)
  );
}

export default name;