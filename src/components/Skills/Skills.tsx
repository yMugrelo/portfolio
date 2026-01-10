import Sql from "../../assets/skills/sql-database-sql-azure-svgrepo-com.svg?react";
import GitIcon from "../../assets/skills/git.svg?react";
import Python from "../../assets/skills/python-svgrepo-com.svg?react";
import Machine from "../../assets/skills/machine-learning-model-svgrepo-com.svg?react";
import Tensor from "../../assets/skills/tensorflow-svgrepo-com.svg?react";
import Datav from "../../assets/skills/chart-mixed-svgrepo-com.svg?react";
import CiCd from "../../assets/skills/ci-cd-svgrepo-com.svg?react";
import AI from "../../assets/skills/ai-svgrepo-com.svg?react";
import Docker from "../../assets/skills/docker-svgrepo-com.svg?react";
import Pipeline from "../../assets/skills/pipeline-svgrepo-com.svg?react";
import SkillCard from "./SkillCard";

export default function Skills() {
  return (
    <section
      className="bg-primary-white px-4 py-10 lg:pb-25 sm:px-6 md:px-20 lg:px-28 2xl:px-36"
      id="skills"
    >
      <h2 className="mb-10 text-center text-[28px]/[114%] tracking-tight lg:text-[48px]/[114%]">
        <span className="pr-2 md:pr-4">My</span>
        <span className="font-extrabold">Skills</span>
      </h2>
      <ul className="grid grid-cols-2 justify-items-center gap-5 md:grid-cols-3 md:gap-5 lg:grid-cols-4 lg:gap-12 xl:grid-cols-5">
        <SkillCard title="Python">
          <Python className="group-hover:fill-primary-white" />
        </SkillCard>
        <SkillCard title="SQL">
          <Sql className="group-hover:fill-primary-white" />
        </SkillCard>
        <SkillCard title="Machine Learning">
          <Machine className="group-hover:fill-primary-white" />
        </SkillCard>
        <SkillCard title="Pipelines">
          <Pipeline className="group-hover:fill-primary-white" />
        </SkillCard>
        <SkillCard title="Ci/Cd">
          <CiCd className="group-hover:fill-primary-white" />
        </SkillCard>
        <SkillCard title="AI">
          <AI className="group-hover:fill-primary-white" />
        </SkillCard>
        <SkillCard title="Data Visualization">
          <Datav className="group-hover:fill-primary-white" />
        </SkillCard>
        <SkillCard title="Docker">
          <Docker className="group-hover:fill-primary-white group-hover:stroke-primary-white" />
        </SkillCard>
        <SkillCard title="TensorFlow">
          <Tensor className="group-hover:fill-primary-white" />
        </SkillCard>
        <SkillCard title="GIT">
          <GitIcon className="group-hover:fill-primary-white" />
        </SkillCard>
      </ul>
    </section>
  );
}
