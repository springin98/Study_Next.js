import Naming from "@/components/guide/convention/lists/Naming";
import Pages from "@/components/guide/convention/lists/Pages";
import Folders from "@/components/guide/convention/lists/Folders";
import Files from "@/components/guide/convention/lists/Files";
import Jotai from "@/components/guide/convention/lists/Jotai";

export default function Body() {
  return (
    <div>
      <h1>Code Conventions</h1>
      <Naming />
      <Pages />
      <Folders />
      <Files />
      <Jotai />
    </div>
  );
}
