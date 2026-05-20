"use client";

import { useState, useTransition } from "react";
import {
  industryOptions,
  serviceOptions,
  stageOptions,
} from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";

const initialState = {
  fullName: "",
  companyName: "",
  email: "",
  phone: "",
  country: "",
  industry: "",
  website: "",
  productType: "",
  desiredService: "",
  currentStage: "",
  message: "",
};

export function ContactForm() {
  const [formState, setFormState] = useState(initialState);
  const [notice, setNotice] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  function updateField(name: string, value: string) {
    setFormState((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNotice(null);

    startTransition(async () => {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (!response.ok) {
        setNotice("Something went wrong. Please try again.");
        return;
      }

      setNotice("Thank you. Our team will reply within one business day.");
      setFormState(initialState);
    });
  }

  return (
    <form className="grid gap-4" onSubmit={handleSubmit}>
      <div className="grid gap-4 md:grid-cols-2">
        <Input
          name="fullName"
          placeholder="Full name"
          value={formState.fullName}
          onChange={(event) => updateField(event.target.name, event.target.value)}
          required
        />
        <Input
          name="companyName"
          placeholder="Company name"
          value={formState.companyName}
          onChange={(event) => updateField(event.target.name, event.target.value)}
          required
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Input
          name="email"
          type="email"
          placeholder="Email"
          value={formState.email}
          onChange={(event) => updateField(event.target.name, event.target.value)}
          required
        />
        <Input
          name="phone"
          placeholder="Phone"
          value={formState.phone}
          onChange={(event) => updateField(event.target.name, event.target.value)}
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Input
          name="country"
          placeholder="Country"
          value={formState.country}
          onChange={(event) => updateField(event.target.name, event.target.value)}
        />
        <Select
          name="industry"
          value={formState.industry}
          onChange={(event) => updateField(event.target.name, event.target.value)}
        >
          <option value="">Industry</option>
          {industryOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Select>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Input
          name="website"
          placeholder="Website"
          value={formState.website}
          onChange={(event) => updateField(event.target.name, event.target.value)}
        />
        <Input
          name="productType"
          placeholder="Product type"
          value={formState.productType}
          onChange={(event) => updateField(event.target.name, event.target.value)}
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Select
          name="desiredService"
          value={formState.desiredService}
          onChange={(event) => updateField(event.target.name, event.target.value)}
        >
          <option value="">Desired service</option>
          {serviceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Select>
        <Select
          name="currentStage"
          value={formState.currentStage}
          onChange={(event) => updateField(event.target.name, event.target.value)}
        >
          <option value="">Current stage</option>
          {stageOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Select>
      </div>
      <Textarea
        name="message"
        placeholder="Tell us about your goals and timeline."
        rows={5}
        value={formState.message}
        onChange={(event) => updateField(event.target.name, event.target.value)}
      />
      {notice ? <p className="text-sm text-ink/70">{notice}</p> : null}
      <Button type="submit" disabled={isPending}>
        {isPending ? "Sending..." : "Request consultation"}
      </Button>
    </form>
  );
}
