'use client'
import { createContext, useContext } from "react"

export interface User {
    id: string;
    email: string;
    createdAt: string;
    updatedAt?: string;
  }
  

const SessionContext = createContext()
