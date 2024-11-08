"use client" //This is to allow them to type in their password to access their clubname
import { Button } from "@/components/tailwind/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/tailwind/ui/dialog";
import { Input } from "@/components/tailwind/ui/input";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home(){
  const [inputValue, setInputValue] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      router.push(`/${inputValue}`);
    }
  };
  return(
<div>
<Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Sign In</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a path"
        />
        <Button type="submit">Go</Button>
      </form>
      </DialogContent>
    </Dialog>
    </div>
  )
}


