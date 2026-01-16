import {site} from "@/data/site";

export default function SocialLinks(){
  return(
    <div className="text-sm text-black/60 dark:text-white/60">
      <a className="hover:underline underline-offset-4" href={`mailto:${site.email}`}>
        Email
      </a> {" "}
      -{" "}
      <a className="hover:underline underline-offset-4" href={site.github} target = "_blank" rel="noopener noreferrer">
        GitHub
      </a>{" "}
      -{" "}
      <a className="hover:underline underline-offset-4" href={site.linkedin} target = "_blank" rel="noopener noreferrer">
        LinkedIn
      </a>
    </div>
  );
}