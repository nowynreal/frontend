export type UserRole = "admin" | "team_member" | "client";

export type LeadStatus =
  | "new"
  | "contacted"
  | "discovery_scheduled"
  | "proposal_sent"
  | "won"
  | "lost";

export type ProjectStatus =
  | "onboarding"
  | "document_collection"
  | "compliance_review"
  | "market_research"
  | "outreach_started"
  | "waiting_on_client"
  | "completed"
  | "retainer";

export type DocumentStatus =
  | "pending"
  | "approved"
  | "rejected"
  | "needs_revision";

export type TaskStatus = "todo" | "in_progress" | "waiting" | "completed";

type Table<Row, Insert, Update> = {
  Row: Row;
  Insert: Insert;
  Update: Update;
  Relationships: [];
};

export type Database = {
  public: {
    Tables: {
      profiles: Table<
        {
          id: string;
          role: UserRole;
          full_name: string | null;
          company_id: string | null;
          created_at: string;
        },
        {
          id: string;
          role?: UserRole;
          full_name?: string | null;
          company_id?: string | null;
          created_at?: string;
        },
        {
          role?: UserRole;
          full_name?: string | null;
          company_id?: string | null;
        }
      >;
      leads: Table<
        {
          id: string;
          full_name: string;
          company_name: string;
          email: string;
          phone: string | null;
          country: string | null;
          industry: string | null;
          website: string | null;
          product_type: string | null;
          desired_service: string | null;
          current_stage: string | null;
          message: string | null;
          status: LeadStatus;
          assigned_team_member_id: string | null;
          notes: string | null;
          created_at: string;
        },
        {
          full_name: string;
          company_name: string;
          email: string;
          phone?: string | null;
          country?: string | null;
          industry?: string | null;
          website?: string | null;
          product_type?: string | null;
          desired_service?: string | null;
          current_stage?: string | null;
          message?: string | null;
          status?: LeadStatus;
          assigned_team_member_id?: string | null;
          notes?: string | null;
        },
        {
          status?: LeadStatus;
          assigned_team_member_id?: string | null;
          notes?: string | null;
        }
      >;
      companies: Table<
        {
          id: string;
          name: string;
          industry: string | null;
          country: string | null;
          website: string | null;
          contact_person: string | null;
          contact_email: string | null;
          phone: string | null;
          status: string | null;
          notes: string | null;
          created_at: string;
        },
        {
          name: string;
          industry?: string | null;
          country?: string | null;
          website?: string | null;
          contact_person?: string | null;
          contact_email?: string | null;
          phone?: string | null;
          status?: string | null;
          notes?: string | null;
        },
        {
          name?: string;
          industry?: string | null;
          country?: string | null;
          website?: string | null;
          contact_person?: string | null;
          contact_email?: string | null;
          phone?: string | null;
          status?: string | null;
          notes?: string | null;
        }
      >;
      projects: Table<
        {
          id: string;
          company_id: string;
          client_user_id: string | null;
          service_type: string;
          status: ProjectStatus;
          current_phase: string | null;
          progress_percentage: number | null;
          start_date: string | null;
          due_date: string | null;
          internal_notes: string | null;
          client_visible_summary: string | null;
          assigned_team_member_id: string | null;
          created_at: string;
        },
        {
          company_id: string;
          client_user_id?: string | null;
          service_type: string;
          status?: ProjectStatus;
          current_phase?: string | null;
          progress_percentage?: number | null;
          start_date?: string | null;
          due_date?: string | null;
          internal_notes?: string | null;
          client_visible_summary?: string | null;
          assigned_team_member_id?: string | null;
        },
        {
          status?: ProjectStatus;
          current_phase?: string | null;
          progress_percentage?: number | null;
          due_date?: string | null;
          internal_notes?: string | null;
          client_visible_summary?: string | null;
          assigned_team_member_id?: string | null;
        }
      >;
      documents: Table<
        {
          id: string;
          project_id: string;
          file_name: string;
          document_type: string | null;
          uploaded_by: string | null;
          upload_date: string;
          status: DocumentStatus;
          internal_notes: string | null;
          client_visible_notes: string | null;
        },
        {
          project_id: string;
          file_name: string;
          document_type?: string | null;
          uploaded_by?: string | null;
          status?: DocumentStatus;
          internal_notes?: string | null;
          client_visible_notes?: string | null;
        },
        {
          status?: DocumentStatus;
          internal_notes?: string | null;
          client_visible_notes?: string | null;
        }
      >;
      tasks: Table<
        {
          id: string;
          project_id: string;
          title: string;
          description: string | null;
          due_date: string | null;
          status: TaskStatus;
          assigned_to: string | null;
          created_at: string;
        },
        {
          project_id: string;
          title: string;
          description?: string | null;
          due_date?: string | null;
          status?: TaskStatus;
          assigned_to?: string | null;
        },
        {
          status?: TaskStatus;
          description?: string | null;
          due_date?: string | null;
          assigned_to?: string | null;
        }
      >;
      messages: Table<
        {
          id: string;
          project_id: string;
          sender_id: string | null;
          body: string;
          created_at: string;
        },
        {
          project_id: string;
          sender_id?: string | null;
          body: string;
        },
        {
          body?: string;
        }
      >;
      reports: Table<
        {
          id: string;
          project_id: string;
          title: string;
          summary: string | null;
          created_at: string;
          file_url: string | null;
        },
        {
          project_id: string;
          title: string;
          summary?: string | null;
          file_url?: string | null;
        },
        {
          summary?: string | null;
          file_url?: string | null;
        }
      >;
      team_members: Table<
        {
          id: string;
          user_id: string | null;
          role_title: string | null;
          region: string | null;
          created_at: string;
        },
        {
          user_id?: string | null;
          role_title?: string | null;
          region?: string | null;
        },
        {
          role_title?: string | null;
          region?: string | null;
        }
      >;
      brand_settings: Table<
        {
          id: string;
          company_name: string;
          slogan: string | null;
          contact_email: string | null;
          primary_color: string | null;
          accent_color: string | null;
          logo_url: string | null;
          updated_at: string;
        },
        {
          company_name: string;
          slogan?: string | null;
          contact_email?: string | null;
          primary_color?: string | null;
          accent_color?: string | null;
          logo_url?: string | null;
        },
        {
          company_name?: string | null;
          slogan?: string | null;
          contact_email?: string | null;
          primary_color?: string | null;
          accent_color?: string | null;
          logo_url?: string | null;
        }
      >;
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};
