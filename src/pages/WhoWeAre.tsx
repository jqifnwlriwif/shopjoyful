import { memo } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const WhoWeAre = memo(() => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto space-y-12"
        >
          <section className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Who We Are</h1>
            <p className="text-lg text-muted-foreground">
              [Your company tagline or brief introduction]
            </p>
          </section>

          <section className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                alt="Our Team"
                className="rounded-lg shadow-lg w-full h-[300px] object-cover"
                loading="lazy"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-semibold">Our Mission</h2>
              <p className="text-muted-foreground">
                [Your company mission statement and core values]
              </p>
            </motion.div>
          </section>

          <section className="space-y-8">
            <h2 className="text-2xl font-semibold text-center">Our Values</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Innovation",
                  description: "[Description of your innovation value]",
                  image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
                },
                {
                  title: "Quality",
                  description: "[Description of your quality standards]",
                  image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
                },
                {
                  title: "Sustainability",
                  description: "[Description of your sustainability practices]",
                  image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09",
                },
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * (index + 1) }}
                  className="bg-card rounded-lg overflow-hidden shadow-lg"
                >
                  <img
                    src={value.image}
                    alt={value.title}
                    className="w-full h-40 object-cover"
                    loading="lazy"
                  />
                  <div className="p-4 space-y-2">
                    <h3 className="font-semibold">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
});

WhoWeAre.displayName = "WhoWeAre";

export default WhoWeAre;