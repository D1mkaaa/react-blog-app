import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import PostItem from "./PostItem";

const PostList = ({ posts, title, remove }) => {
   if (!posts.length) {
      return <h1 style={{ textAlign: "center" }}>Посты не найдены!</h1>;
   }
   
   return (
      <div>
         <h1 style={{ textAlign: "center" }}>{title}</h1>
         <AnimatePresence>
            {posts.map((post, index) => (
               <motion.div
               key={post.id}
               initial={{ opacity: 0, x: 300, scale: 0.8 }}
               animate={{ opacity: 1, x: 0, scale: 1 }}
               exit={{ opacity: 0, x: -300, scale: 0.8 }}
               transition={{ duration: 0.5 }}
            >
               <PostItem 
                  remove={remove} 
                  number={index + 1} 
                  post={post} 
               />
            </motion.div>
            ))}
         </AnimatePresence>
      </div>
   );
};

export default PostList;