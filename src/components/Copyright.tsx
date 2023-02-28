import { motion } from 'framer-motion';

export function Copyright() {
  return (
    <div className="bg-dark text-[#dbdbdb] py-6 border-t
     border-[#2b2b2b]">
      <div className="container mx-auto">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate="show"
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            type: 'tween',
            delay: 0.2,
          }}
          viewport={{ once: false, amount: 0 }}
          className="text-[0.02em] text-base">
          © 2021 All Rights Reserved. Designed by
          <a
            href="https://themeforest.net/user/creativegigs/portfolio"
            target="_blank"
            rel="noreferrer"
            className="ml-1 border-b pb-[5px]">
            CreativeGigs
          </a>
        </motion.div>

      </div>
    </div >


  );
}