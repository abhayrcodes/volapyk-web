//'use client'

import Navbar from "@/components/Navbar";
import Link from "next/link";
import { useState } from 'react';
import { prisma } from '../../prisma/client.ts';
import AllCasesPrefs from "@/components/PrefComps.tsx"
import { get } from "http";

async function getCases() {
    const cases = await prisma.cases.findMany();
  return cases
}

export default async function SignUp() {

    const cases = await getCases();

    return (
        <div>
            <Navbar/>

            <AllCasesPrefs
                cases={cases}
            />
            
        </div>
    )
  }
/*
<div className="flex justify-between">
                <ButtonGroup
                text={"The service has the right to copy and distribute your data at its discretion."}
                og={3}
            />
            <ButtonGroup
                text={"The service has the right to copy and distribute your data at its discretion."}
                og={1}
            />
            <ButtonGroup
                text={"The service has the right to copy and distribute your data at its discretion."}
                og={2}
            />
            </div>
            <div className="flex justify-between">
                <ButtonGroup
                text={"The service has the right to copy and distribute your data at its discretion."}
                og={3}
            />
            <ButtonGroup
                text={"The service has the right to copy and distribute your data at its discretion."}
                og={1}
            />
            <ButtonGroup
                text={"The service has the right to copy and distribute your data at its discretion."}
                og={2}
            />
            </div>*/