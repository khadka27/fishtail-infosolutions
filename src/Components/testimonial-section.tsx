import Image from "next/image"

export default function TestimonialsSection() {
  return (
    <section className="py-12 bg-green-500 text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-4/5">
            <blockquote className="text-lg md:text-xl italic mb-4">
              "We've looked at a lot of SEO solutions but these guys were always the clear favorite. They have the right
              strategy and they've been awesome to work with."
            </blockquote>
            <div className="flex items-center">
              <div className="mr-4">
                <Image
                  src="/placeholder.svg?height=60&width=60"
                  alt="Irene Warner"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
              </div>
              <div>
                <p className="font-semibold">Irene Warner</p>
              </div>
            </div>
          </div>

          <div className="hidden md:flex md:w-1/5 justify-end">
            <div className="flex space-x-2">
              <button className="w-3 h-3 rounded-full bg-white bg-opacity-50"></button>
              <button className="w-3 h-3 rounded-full bg-white"></button>
              <button className="w-3 h-3 rounded-full bg-white bg-opacity-50"></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

